// input.onButtonPressed(Button.A, function () {

// })


//basic.pause(1500);
function ispis(tekst: string) {
    let dd = tekst.length
    if (dd < 31) {
        salji(tekst)
    } else {
        salji("" + tekst.substr(0, 30) + "+")
        salji(tekst.substr(30, dd))
    }
}

function salji(tekst: string) {
    let duz = tekst.length
    let buf = pins.createBuffer(duz);
    for (let n = 0; n <= duz - 1; n++) {
        let bb = tekst.charCodeAt(n);
        buf.setNumber(NumberFormat.UInt8LE, n, bb);
    }
    pins.i2cWriteBuffer(0x11, buf, false);
    basic.pause(duz*Display.saljiDelay);
}


//% blockHidden=true
enum duz2{
    //% block="4"
    jen = 4,
    //% block="6"
    dva = 6,    
    //% block="8"
    tri = 8
}

//% blockHidden=true
enum jendva{
    //% block="1"
    one = 1,
    //% block="2"
    two = 2
}

//% blockHidden=true
enum odabir {
    //% block="NO"
    Bijelo = 0,
    //% block=""
    Crno = 1
}

//% blockHidden=true
enum bitmapIndex {
    //% block="Custom 1"
    Custom1 = 1,
    //% block="Points (+)"
    Custom2 = 2,
    //% block="Lives (-)"
    Custom3 = 3,
    //% block="Door"
    Custom4 = 4,
    //% block="Custom 5"
    Custom5 = 5,
    //% block="Player animation frame"
    AnimationFrame = 8,
    //% block="Player"
    Player = 9
}

//% blockHidden=true
enum jendeset {
    //% block="1"
    one = 1,
    //% block="2"
    two = 2,
    //% block="3"
    three = 3,
    //% block="4"
    four = 4,
    //% block="5"
    five = 5,
    //% block="6"
    six = 6,
    //% block="7"
    seven = 7,
    //% block="8"
    eight = 8,
    //% block="9"
    nine = 9,
    //% block="10"
    ten = 10
}

//% blockHidden=true
enum jendevet {
    //% block="1"
    one = 1,
    //% block="2"
    two = 2,
    //% block="3"
    three = 3,
    //% block="4"
    four = 4,
    //% block="5"
    five = 5,
    //% block="6"
    six = 6,
    //% block="7"
    seven = 7,
    //% block="8"
    eight = 8,
    //% block="9"
    nine = 9
}

//% blockHidden=true
enum jenpet {
    //% block="1"
    one = 1,
    //% block="2"
    two = 2,
    //% block="3"
    three = 3,
    //% block="4"
    four = 4,
    //% block="5"
    five = 5
}

//% blockHidden=true
enum nuladeset {
    //% block="0"
    zero = 0,
    //% block="1"
    one = 1,
    //% block="2"
    two = 2,
    //% block="3"
    three = 3,
    //% block="4"
    four = 4,
    //% block="5"
    five = 5,
    //% block="6"
    six = 6,
    //% block="7"
    seven = 7,
    //% block="8"
    eight = 8,
    //% block="9"
    nine = 9
}

//% blockHidden=true
enum nulapet {
    //% block="0"
    zero = 0,
    //% block="1"
    one = 1,
    //% block="2"
    two = 2,
    //% block="3"
    three = 3,
    //% block="4"
    four = 4,
    //% block="5"
    five = 5
}

//% blockHidden=true
enum nula_jedan {
    //% block="0"
    nula = 0,
    //% block="1"
    jedan = 1
}

//% blockHidden=true
enum nula_tri {
    //% block="0"
    nula = 0,
    //% block="1"
    jedan = 1,
    //% block="2"
    dva = 2,
    //% block="3"
    tri = 3        
}

//% blockHidden=true
enum coloring {
    //% block="⬛"
    black = 0,
    //% block="⬜"
    white = 1
}

//% blockHidden=true
enum coloringplus {
    //% block="⬛"
    black = 0,
    //% block="⬜"
    white = 1,
    //% block="null"
    nill = 2
}

//% blockHidden=true
enum coloringled {
    //% block="🟥"
    red = 0,
    //% block="🟩"
    green = 1
}

//% blockHidden=true
enum yn {
    //% block="Yes"
    y = 1,
    //% block="No"
    n = 0
}

//% blockHidden=true
enum lr {
    //% block="Left"
    l = 0,
    //% block="Right"
    r = 1
}

//% blockHidden=true
enum pm {
    //% block="+"
    p = 1,
    //% block="-"
    m = 0
}

//% blockHidden=true
enum xy {
    //% block="X"
    x = 1,
    //% block="Y"
    y = 0
}

//% color=#4467fe  
namespace Display {

    //bytearray
    let pit = pins.createBuffer(1);
    pit.setNumber(NumberFormat.Int8LE, 0, 1); // ?

// STANDARDNE FUNKCIJE ****************************************************

    //% weight=222  color=#f87820    
    //% blockId=rest
    //% block="RESET PROGRAM"
    //% blockExternalInputs=true
    export function rest(){
        ispis("RST");
        while (pit.getNumber(NumberFormat.Int8LE, 0) != 5){
            trazi();
            basic.pause(20);
        }
    }

    //% weight=221 color=#f87820
    //% blockId=displej
    //% block="SCREEN MODE %mod"
    export function displej(mod: nula_jedan): void {
        ispis("DIS;" + mod.toString());
    }    

    //% weight=220 color=#f87820
    //% blockId=brisi
    //% block="CLEAR SCREEN"
    export function brisi(): void {
        ispis("CLS");
    }

    //% weight=218 color=#f87820
    //% blockId=kontrast
    //% block="SCREEN CONTRAST (0-100) %oc"
    export function kontrast(oc: number): void {
        ispis("CON;" + oc.toString());
    }

    //% weight=216 color=#f87820
    //% blockId=isbuf
    //% block="SHOW: buffer"
    export function isbuf(): void {
        ispis("BUF");
    }

    //% weight=214  color=#f87820
    //% blockId=zvuksignal
    //% block="SOUND: frequency %freq (0-255) and length %time (mil.sec. 0-1000)"
    //% inlineInputMode=inline
    export function zvuksignal(freq: number, time: number){
        if(freq > 255){freq = 255;}
        if(freq < 0){freq = 0;}

        if(time > 1000){time = 1000;}
        if(time < 0){time = 0;}

        ispis("BIP;" +  freq.toString() + ";" + time.toString());
    }

    //% weight=212 color=#f87820
    //% blockId=lin
    //% block="LINE: x1(0-83) %x1 y1(0-47) %y1 to x2(0-83) %x2 y2(0-47) %y2 , color %boja"
    //% inlineInputMode=inline
    export function lin(x1: number, y1: number, x2: number, y2: number, boja: coloringplus): void {
        let a;
        switch (boja) {
            case (2): a = null;
            case (1): a = "W"; break;
            case (0): a = "B"; break;
        }

        ispis("LIN;" + x1.toString() + ";" + y1.toString() + ";" + x2.toString() + ";" + y2.toString() + ";" + a);
    }

    //% weight=210 color=#f87820
    //% blockId=kruz
    //% block="CIRCLE: x(0-83) %x y(0-47) %y , radius %r , color %boja filled with %isp"
    //% inlineInputMode=inline
    export function kruz(x: number, y: number, r: number, boja: coloring, isp: coloringplus): void {
        let b;
        switch (boja) {
            case (1): b = "W"; break;
            case (0): b = "B"; break;
        }

        let a;
        switch (isp) {
            case (2): a = null; break;
            case (1): a = "W"; break;
            case (0): a = "B"; break;
        }

        ispis("CIR;" + x.toString() + ";" + y.toString() + ";" + r.toString() + ";" + b + ";" + a);
    }

    //% weight=208 color=#f87820
    //% blockId=kvad
    //% block="RECTANGLE: x(0-83) %x1 y(0-47) %y1, width %x2, height %y2 , color %boja filled with %isp"
    //% inlineInputMode=inline
    export function kvad(x1: number, y1: number, x2: number, y2: number, boja: coloring, isp: coloringplus): void {
        
        let b;
        switch (boja) {
            case (1): b = "W"; break;
            case (0): b = "B"; break;
        }

        let a;
        switch (isp) {
            case (2): a = null; break;
            case (1): a = "W"; break;
            case (0): a = "B"; break;
        }

        ispis("REC;" + x1.toString() + ";" + y1.toString() + ";" + x2.toString() + ";" + y2.toString() + ";" + b + ";" + a);
    }

    //% weight=206 color=#f87820
    //% blockId=ispistxtpix
    //% block="TEXT(Graphics): %tekst on x(0-83) %x y(0-47) %y size (0-3) %s color %boja"
    //% inlineInputMode=inline
    export function ispistxtpix(tekst: string, x: number, y: number, s: number, boja: coloringplus): void {
        let a;
        switch (boja) {
            case (2): a = null; break;
            case (1): a = "W"; break;
            case (0): a = "B"; break;
        }
        ispis(tekst + ";" + x.toString() + ";" + y.toString()+ ";" + s.toString() + ";" + a + ";G");
    }

    //% weight=204 color=#f87820
    //% blockId=ispistxt
    //% block="TEXT: %tekst - on col x(0-13) %x, row y(0-5) %y size (0-3) %s color %boja"
    //% inlineInputMode=inline
    export function ispistxt(tekst: string, x: number, y: number, s: number, boja: coloringplus): void {
        let a;
        switch (boja) {
            case (2): a = null; break;
            case (1): a = "W"; break;
            case (0): a = "B"; break;
        }
        ispis(tekst + ";" + x.toString() + ";" + y.toString()+ ";" + s.toString() + ";" + a);
    }

    //% weight=202 color=#f87820
    //% blockId=bristxtpoz
    //% block="DELETE: text from %tekst letters on col x %x and row y %y"
    //% inlineInputMode=inline
    export function bristxtpoz(tekst: string, x: nuladeset, y: nulapet): void {
        let ispuna = [];
        for (let i = 0; i < tekst.length; i++) {
            ispuna.push(" ");
        }
        let celo = ispuna.join("");
        ispis(celo + ";" + x.toString() + ";" + y.toString() + ";B");
    }

    //% weight=200 color=#f87820
    //% blockId=ispunaekrana
    //% block="PAINT display: color %boja"
    export function ispunaekrana(boja: number): void {
        ispis("FIL;" + boja.toString());
    }

//******************************* scroll */

    //% weight=120 color=#05b115
    //% blockId=scup
    //% block="SCROLL: UP for %n pixel"
    export function scup(n: number): void {
        ispis("SBU;" + n.toString());
    }

    //% weight=118 color=#05b115
    //% blockId=scdown
    //% block="SCROLL: DOWN for %n pixel"
    export function scdown(n: number): void {
        ispis("SBD;" + n.toString());
    }

    //% weight=116 color=#05b115
    //% blockId=sctxtup
    //% block="SCROLL: text UP for 1 row - loop %r"
    export function sctxtup(r: yn): void {
        let a;
        switch(r){
        case (1): a = "R"; break;
        case (0): a = null; break;
        }
        ispis("SCU;" + a);
    }

    //% weight=114 color=#05b115
    //% blockId=sctxtdown
    //% block="SCROLL: text DOWN for 1 row - loop %r"
    export function sctxtdown(r: yn): void {
        let a;
        switch(r){
        case (1): a = "R"; break;
        case (0): a = null; break;
        }
        ispis("SCD;" + a);
    }

    //% weight=112 color=#05b115
    //% blockId=bitscrolltxt
    //% block="SCROLL: horizontal - BIT: from %str, from row %x to row %y with loop %nn"
    //% inlineInputMode=inline
    export function bitscrolltxt(str: lr, x: number, y: number, nn: yn): void {
        let b;
        switch (str) {
            case (1): b = "L"; break;
            case (0): b = "R"; break;
        }
        let a;
        switch (nn) {
            case (1): a = "R"; break;
            case (0): a = null; break;
        }
        ispis("SCC;" + b + ";" + x.toString() + ";" + y.toString() + ";" + a);
    }    
//************************************** GRAPHICS */

    //% weight=110 color=323131
    //% blockId="defimage"
    //% block="SPRITE"
    //% blockHidden=true
    //% imageLiteral=1
    //% imageLiteralColumns=8
    //% imageLiteralRows=8
    //% shim=images::createImage
    export function defImage(i: string): Image {
        return <Image><any>i;
    }

    //% weight=108 color=#323131
    //% blockId=bitfoo
    //% block="BITMAP %bitbr| $i"
    //% i.shadow="defimage"
    //% blockExternalInputs=true
    export function foo(bitbr: bitmapIndex, i: Image): void {
        // this is not pretty but basically, i is an Image
        let im = i;
        fooo(
            bitbr,
            redSlike(im, 0),
            redSlike(im, 1),
            redSlike(im, 2),
            redSlike(im, 3),
            redSlike(im, 4),
            redSlike(im, 5),
            redSlike(im, 6),
            redSlike(im, 7)
        )
    }

    function redSlike(im: Image, y: number): number {
        return (
            +im.pixel(7, y)
            | +im.pixel(6, y) << 1
            | +im.pixel(5, y) << 2
            | +im.pixel(4, y) << 3
            | +im.pixel(3, y) << 4
            | +im.pixel(2, y) << 5
            | +im.pixel(1, y) << 6
            | +im.pixel(0, y) << 7);
    }

    //% weight=106 color=#323131
    //% blockId=fooo
    //% block="BITMAP %bitbr| $foof $foof1 $foof2 $foof3 $foof4 $foof5 $foof6 $foof7"
    //% foof.shadow="displayRed"
    //% foof1.shadow="displayRed"
    //% foof2.shadow="displayRed"
    //% foof3.shadow="displayRed"
    //% foof4.shadow="displayRed"
    //% foof5.shadow="displayRed"
    //% foof6.shadow="displayRed"
    //% foof7.shadow="displayRed"
    //% blockExternalInputs=true
    function fooo(bitbr: bitmapIndex, foof: number, foof1: number, foof2: number, foof3: number, foof4: number, foof5: number, foof6: number, foof7: number): void {
        ispis("BIT;" + bitbr.toString() + ";" + foof.toString() + ";" + foof1.toString() + ";" + foof2.toString() + ";" + foof3.toString() + ";" + foof4.toString() + ";" + foof5.toString() + ";" + foof6.toString() + ";" + foof7.toString());
    }

    //% weight=104 color=#323131
    //% blockId=bit8x8
    //% block="BITMAP: (1-9) %n 8 x (0-255) | %red1 %red2 %red3 %red4 %red5 %red6 %red7 %red8 "
    //% inlineInputMode=inline
    export function bit8x8(n: bitmapIndex, red1: number, red2: number, red3: number, red4: number, red5: number, red6: number, red7: number, red8: number): void {
        ispis("BIT;" + n.toString() + ";" + red1.toString() + ";" + red2.toString() + ";" + red3.toString() + ";" + red4.toString() + ";" + red5.toString() + ";" + red6.toString() + ";" + red7.toString() + ";" + red8.toString());
        /*   let zbroj = [128,64,32,16,8,4,2,1] */
    }

    export let boja = coloring.black;
    
    //% weight=102 color=#323131
    //% blockId=isbit8x8
    //% block="BITMAP: (1-9) %n x (0-83) %x , y(0-47) %y color %boja"
    //% inlineInputMode=inline
    export function isbit8x8(n: bitmapIndex, x: number, y: number, boja: coloring): void {
        let a;
        switch (boja) {
            case (1): a = "W"; break;          
            case (0): a = "B"; break;
        }
        ispis("SPR;" + n.toString() + ";" + x.toString() + ";" + y.toString() + ";" + a);
    }

    //% weight=100 color=#323131
    //% blockId=ispispix
    //% block="PIXEL: x (0-83) %x , y (0-47) %y color %boja"
    //% inlineInputMode=inline
    export function ispispix(x: number, y: number, boja: coloringplus): void {
        let a;
        switch (boja) {
            case (2): a = null; break;
            case (1): a = "W"; break;
            case (0): a = "B"; break;
        }
        ispis("PIX;" + x.toString() + ";" + y.toString() + ";" + a);
    }
//************************************* GAME */
    //% weight=71 color=#323131
    //% blockId=leds
    //% block="LED: color %boja (mils) %br"
    export function leds(boja: coloringled, br: number ): void {
        let a;
        switch (boja) {
            case (1): a = "G"; break;          
            case (0): a = "R"; break;
        }
        ispis("LED;" + a + ";" + br.toString());
    }

    //% weight=70
    //% blockId=begin
    //% block="GAME: START message"
    export function begin(){
        ispis("CLS");
        ispis("START;2;1;2");
        ispis("G A M E;3;3");
        basic.pause(1000);
    }

    //% weight=68
    //% blockId=end
    //% block="GAME: END message"
    export function end(){
        if (pit.getNumber(NumberFormat.Int8LE, 0) == 9){ 
            saljiDelay = 8;
            basic.pause(300); 
            trazi();
            basic.pause(100);            
            ispis("CLS");
            ispis("E N D;2;1;2");
            ispis("G A M E;3;3");
            basic.pause(100);
            ispis("Score:"+pit.getNumber(NumberFormat.Int8LE, 0).toString()+";3;4");
            while(true)
            {
                basic.pause(5000);
            }
        }
    }
    //% weight=66
    //% blockId=score
    //% block="GAME: Point scored"
    export function score(){
        if (pit.getNumber(NumberFormat.Int8LE, 0) == 2){
            return true;
        } else { return false; }
    }
    //% weight=64
    //% blockId=dead
    //% block="GAME: Player dead"
    export function dead(){
        if (pit.getNumber(NumberFormat.Int8LE, 0) == 3){
            return true;
        } else { return false; }
    }
    //% weight=62
    //% blockId=alive
    //% block="GAME: Player fall"
    export function fall(){
        if (pit.getNumber(NumberFormat.Int8LE, 0) == 4){
            return true;
        } else { return false; }
    }

    //% weight=60
    //% blockId=zvuk
    //% block="GAME: all sounds"
    export function zvuk(){
        if (pit.getNumber(NumberFormat.Int8LE, 0) == 2){
            music.playTone(1500, 50);
        } else if (pit.getNumber(NumberFormat.Int8LE, 0) == 3){
            music.playTone(800, 100);
        } else if (pit.getNumber(NumberFormat.Int8LE, 0) == 4){
            for(let i=900; i<1200; i+=30){
                music.playTone(i, 8);
            }
        } 
    }

    //% weight=58
    //% blockId=collision
    //% block="COLLISION %ans"
    export function collision(ans: yn){
        switch(ans){
            case(1): ispis("KOL;1"); break;
            case(0): ispis("KOL;0"); break;
        }
    }

    //% weight=56
    //% blockId=trazi
    //% block="GET GAME status"
    export function trazi(){
        try{
            pit = pins.i2cReadBuffer(0x11, 1, false);
        }catch(err){
            console.log(err);
        }
    }

    //% weight=55
    //% blockId=get_score
    //% block="GAME: get score"
    export function get_score(){
        ispis("GET;P");
        trazi();
        return pit.getNumber(NumberFormat.Int8LE, 0);       
    }

    export let saljiDelay : number = duz2.dva;

    //% weight=54
    //% block="SET COM FACTOR %odaberi"
    //% inlineInputMode=inline
    export function duzod(odaberi : duz2){
        saljiDelay = odaberi;
    }

    //% weight=52
    //% blockId=gumb
    //% block="BUTTON: increment %pov direction %smer for %kol (0 - 255)"
    //% inlineInputMode=inline
    export function gumb(pov: pm, smer: xy, kol: number){   
        let a;
        switch (smer) {
            case (1): a = "X"; break;
            case (0): a = "Y"; break;
        }

        let b;
        switch (pov) {
            case (1): b = "+"; break;
            case (0): b = "-"; break;
        }

        if(kol > 255){kol = 255;}
        if(kol < 0){kol = 0;}

        ispis("BUT;" + b + ";" + a + ";" + kol.toString());
    }

    //% weight=50
    //% blockId=skok
    //% block="JUMP UP: pixel %sk (0-255)"
    //% inlineInputMode=inline
    export function skok(sk: number){
        if(sk > 255){sk = 255;}
        if(sk < 0){sk = 0;}

        ispis("JMP;" + sk.toString());
    }

    //% weight=48
    //% blockId=level
    //% block="AUTO LEVELS: speed max. %maxb (10-255), speed start %pocb (10-255), change for %pr (0-255) next level, points for new level %bpr (0-255)"
    //% inlineInputMode=inline
    export function level(maxb: number, pocb: number, pr: number, bpr: number){
        if(maxb < 10){maxb = 10;}
        if(maxb > 255){maxb = 255;}

        if(pocb < 10){pocb = 10;}
        if(pocb > 255){pocb = 255;}

        if(pr > 255){pr = 255;}
        if(pr < 0){pr = 0;}

        if(bpr > 255){bpr = 255;}
        if(bpr < 0){bpr = 0;}

        ispis("LVL;" + maxb.toString() + ";" + pocb.toString() + ";" + pr.toString() + ";" + bpr.toString());
    }


    //% weight=46
    //% blockId=pozobj
    //% block="OBJECT: screen : %bre , bitmap  %brm , x(0-9) %x  y(0-5) %y length %d (1-10) hor/ver %s (0/1)"
    //% inlineInputMode=inline
    export function pozobj(bre: number, brm: bitmapIndex, x: number, y: number, d: number, s: number){              
        ispis("OBJ;" + bre.toString() + ";" + brm.toString() + ";" + x.toString() + ";" + y.toString() + ";" + d.toString() + ";" + s.toString());
    }


    //% weight=44
    //% blockId=prikazobj
    //% block="SHOW SCREEN %bre"
    //% inlineInputMode=inline
    export function prikazobj(bre: number){
        ispis("FX;" + bre.toString());
    }


    //% weight=42
    //% blockId=autoscHoriz
    //% block="GAME SCROLL horizontal %schz "
    //% inlineInputMode=inline
    export function autoscHoriz(schz: yn){
        let a;
        switch (schz) {
            case (1): a = "1"; break;
            case (0): a = "0"; break;
        }

        ispis("ASD;" + a);
    }

    //% weight=40
    //% blockId=trajanje
    //% block="GAME DURATION %tr (0-255) sec."
    //% inlineInputMode=inline
    export function trajanje(tr: number){
        if(tr > 255){tr = 255;}
        if(tr < 0){tr = 0;}

        ispis("TIM;" + tr.toString());
    }

    //% weight=38
    //% blockId=bodovi
    //% block="POINTS at start %bod (0-255)"
    //% inlineInputMode=inline
    export function bodovi(bod: number){
        if(bod > 255){bod = 255;}
        if(bod < 0){bod = 0;}

        ispis("BOD;" + bod.toString());
    }

    //% weight=36
    //% blockId=negbodovi
    //% block="POINTS negative (enable)"
    //% inlineInputMode=inline
    export function negbodovi(){
        ispis("BON");
    }

    //% weight=34
    //% blockId=brziv
    //% block="LIVES at start %zbod (0-255)"
    //% inlineInputMode=inline
    export function brziv(zbod: number){
        if(zbod > 255){zbod = 255;}
        if(zbod < 0){zbod = 0;}

        ispis("LIV;" + zbod.toString());
    }

    //% weight=32
    //% blockId=vrata
    //% block="LEVEL GATE (enable)"
    //% inlineInputMode=inline
    export function vrata(){
        ispis("DOR");
    }

    //% weight=30
    //% blockId=grav
    //% block="GRAVITY %g "
    //% inlineInputMode=inline
    export function grav(g: yn){
        let a;
        switch (g) {
            case (1): a = "1"; break;
            case (0): a = "0"; break;
        }

        ispis("GRV;" + a);
    }

    //% weight=28
    //% blockId=pad
    //% block="FALL (- life) %p "
    //% inlineInputMode=inline
    export function pad(p: yn){
        let a;
        switch (p) {
            case (1): a = "1"; break;
            case (0): a = "0"; break;
        }
        ispis("PAD;" + a);
    }

    //% weight=26
    //% blockId=brzhorsc
    //% block="GAME SPEED %pix (10 fast - 255 slow) for pixels %kol (1-2)"
    //% inlineInputMode=inline
    export function brzhorsc(pix: number, kol: jendva){
        if(pix > 255){pix = 255;}
        if(pix < 10){pix = 10;}

        ispis("SPD;" + pix.toString() + ";" + kol.toString());
    }

    //% weight=24
    //% blockId=pocpoz
    //% block="PLAYER start position x(0-9) %x , y(0-5) %y"
    //% inlineInputMode=inline
    export function pocpoz(x: number, y: number){
        ispis("POZ;" + x.toString() + ";" + y.toString());
        saljiDelay = 4;
    }


    //% weight=22
    //% blockId=randr
    //% block="RANDOM displays flow"
    //% inlineInputMode=inline
    export function randr(){
        ispis("RND");
    }

    //% weight=20
    //% blockId=anima
    //% block="ANIMATION (player) speed %tr (1-20)"
    //% inlineInputMode=inline
    export function anima(tr: number){
        if(tr > 20){tr = 20;}
        if(tr < 1){tr = 1;}

        ispis("ANI;" + tr.toString());
    }
    
    //% weight=19
    //% blockId=jump
    //% block="JUMP: height (0-255) %x with %pm and length(1-5) %y"
    //% inlineInputMode=inline
    export function jump(x: number, pm: pm, y: number): void {
        let a;
        switch (pm) {
            case (1): a = "+"; break;
            case (0): a = "-"; break;
        }

        ispis("JMP;" + x.toString() + ";" + a + ";" + y.toString());
    }

    //% weight=18
    //% blockId=del
    //% block="DELETE past objects"
    //% inlineInputMode=inline
    export function del(): void {
        ispis("DEL");
    }

    //% weight=17
    //% blockId=posx
    //% block="GAME: get player position (x)"
    export function posx(){
        ispis("GET;X");
        trazi();
        return pit.getNumber(NumberFormat.Int8LE, 0);       
    }

    //% weight=16
    //% blockId=posy
    //% block="GAME: get player position (y)"
    export function posy(){
        ispis("GET;Y");
        trazi();
        return pit.getNumber(NumberFormat.Int8LE, 0);       
    }   

}
