#include
<stdio.h>
#include
<stdlib.h>
#include
<string.h>
int main
(int argc, char ** argv)
{
int i;
int length;
char DATA[1000];
char*str_len = getenv("CONTENT_LENGTH");
if
(str_len == NULL)
return 0;
length = strtod(str_len, NULL);
for (i=0; i<length; i++)
{
scanf("%c", &DATA[i]);
}
printf("Content-type: text/html\n\n");
printf("%s\n", DATA); return 0;
}