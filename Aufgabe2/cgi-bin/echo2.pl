#!"C:\usr\xampp\perl\bin\perl.exe"
##
##  demo CGI program which prints cgi request
##  
##

use CGI;
use Data::Dumper;

my $query = CGI->new; # even though I'd rather call the object $cgi
print $query->header('text/plain'), Dumper($query);