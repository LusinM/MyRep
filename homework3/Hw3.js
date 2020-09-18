let x = prompt("Enter string");
let number = 0;
if (x.length < 5) {
    alert("Try Again");
}
else
{
    switch (x.charAt(0)) {
        case 'a':
        case 'e':
        case 'u':
        case 'i':
        case 'o':
            number+=4 
            break;
        case 'z':
            number+=5
            break;
        default:
            number-=1
            break;
    }
    switch (x.charAt(1)) {
        case 'a':
        case 'e':
        case 'u':
        case 'i':
        case 'o':
            number+=4 
            break;
        case 'z':
            number+=5
            break;
        default:
            number-=1
            break;
    }
    switch (x.charAt(2)) {
        case 'a':
        case 'e':
        case 'u':
        case 'i':
        case 'o':
            number+=4 
            break;
        case 'z':
            number+=5
            break;
        default:
            number-=1
            break;
    }
    alert("Yor number is " + number);

}