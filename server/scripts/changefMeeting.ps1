#Exchange 2013 Version
Add-PSSnapin Microsoft.Exchange.Management.PowerShell.SnapIn

#get Account Credential for impersonation
$Credential = Get-Credential
$user = $Credential.UserName
$pass = $Credential.GetNetworkCredential().password

$date = Get-Date("05.06.2022")
$start = (get-date $date) 
$end = $start.addhours(24)
$Tdate = Get-Date("10.06.2022")
$Tstart = (get-date $Tdate) 
$Tend = $Tstart.addhours(24) 
$AlldayEvent = $true
$Location = "Luzern (A06/Hauptsitz)"
$Subject_D = "SR-Sommerausflug (½ Tag arbeitsfrei)"

$Path = "C:\Users\luisg\Documents\GitHub\BLJ-Projekt\server\scripts\"
$contentuserD = $Path + "CheckUser4Move.txt"
$outfileD = "UserTerminMoved.txt"
$outfileAppointM = "Termindetail.csv"

$date = Get-Date("05.06.2022")
$start = (get-date $date) 
$end = $start.addhours(24)
$Tdate = Get-Date("10.06.2022")
$Tstart = (get-date $Tdate) 
$Tend = $Tstart.addhours(24) 
$AlldayEvent = $true
$Location = "Luzern (A06/Hauptsitz)"
$Subject_D = "SR-Sommerausflug (½ Tag arbeitsfrei)"

function MoveTerminAusContent { 
    
   
    # get Ressourcen Array
    $users = (Get-Content $contentuserD)
        

    foreach ($impdUser in $users) {        
        #Check Parameter for new Create
        $move = $false

        $EWSDllpath = 'microsoft.exchange.webservices.2.2.0\lib\40\Microsoft.Exchange.WebServices.dll'
        $EwsUrl = 'https://mail62.suvanet62.ch/EWS/Exchange.asmx'
        Import-Module $EWSDllpath

        # Create a new Exchange Service Object 
        $service = new-object Microsoft.Exchange.WebServices.Data.ExchangeService([Microsoft.Exchange.WebServices.Data.ExchangeVersion]::Exchange2016_CU11) 
        # Set the Credentials 
        $service.Credentials = new-object Microsoft.Exchange.WebServices.Data.WebCredentials($user, $pass) 

 
        #Set the URL for the service 
        $service.Url = new-object Uri($EwsUrl) 
        
        $service.ImpersonatedUserId = New-Object Microsoft.Exchange.WebServices.Data.ImpersonatedUserId ([Microsoft.Exchange.WebServices.Data.ConnectingIdType]::SMTPAddress, $impdUser);


        #$service.AutodiscoverUrl($impdUser.mail.ToString())

        $folderid = new-object  Microsoft.Exchange.WebServices.Data.FolderId([Microsoft.Exchange.WebServices.Data.WellKnownFolderName]::Calendar, $impdUser)
        $CalendarFolder = [Microsoft.Exchange.WebServices.Data.CalendarFolder]::Bind($service, $folderid)
        $cvCalendarview = new-object Microsoft.Exchange.WebServices.Data.CalendarView($start, $end, 2000)
        $cvCalendarview.PropertySet = new-object Microsoft.Exchange.WebServices.Data.PropertySet([Microsoft.Exchange.WebServices.Data.BasePropertySet]::FirstClassProperties)
        $frCalendarResult = $CalendarFolder.FindAppointments($cvCalendarview)


            
        foreach ($apApointment in $frCalendarResult.Items) {
            $psPropset = new-object Microsoft.Exchange.WebServices.Data.PropertySet([Microsoft.Exchange.WebServices.Data.BasePropertySet]::FirstClassProperties)
            $apApointment.load($psPropset)

            if (($apApointment.Subject -eq $Subject_D) -and ($apApointment.start -eq $start)) {
                $apApointment.Delete([Microsoft.Exchange.WebServices.Data.DeleteMode]::MoveToDeletedItems)
                $move = $true
                    
            }

            

        }

        if ($move -eq $true) {
            #Create and save the appointment 
            $appointment = New-Object Microsoft.Exchange.WebServices.Data.Appointment -ArgumentList $service 
            $appointment.Subject = $Subject_D
            #$appointment.Body = $body
            $appointment.Start = $Tstart
            $appointment.End = $Tend
            $appointment.IsAllDayEvent = $AlldayEvent
            $appointment.IsReminderSet = $false 
            $appointment.Categories.Add('Holiday')
            $appointment.Location = $Location
            #FreeBusyStatus Enum: Free, Tentative, Busy, OOF, WorkingElsewhere, NoData
            $appointment.LegacyFreeBusyStatus = [Microsoft.Exchange.WebServices.Data.LegacyFreeBusyStatus]::OOF
            #$appointment.LegacyFreeBusyStatus = [Microsoft.Exchange.WebServices.Data.LegacyFreeBusyStatus]::Free
            #$appointment.LegacyFreeBusyStatus = [Microsoft.Exchange.WebServices.Data.LegacyFreeBusyStatus]::Busy
            $appointment.Save([Microsoft.Exchange.WebServices.Data.SendInvitationsMode]::SendToNone) 


            $impdUser + ";" + " wurde Termin SR-Sommerausflug verschoben." | Out-File $Path$outfileD -Append
           
        }


 
    }
}

