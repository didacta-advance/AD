// input.onButtonPressed(Button.A, function () {

// })
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
    basic.pause(30)
}



enum odabir {
    //% block="[ ]"
    Bijelo = 0,
    //% block="[#]"
    Crno = 1
}

//% color=218 weight=103 
namespace Display {


    //% weight=102
    //% blockId=bit16
    //% block="iscrtaj bitmapu 16x16 broja %n na poziciji  x %x i  y %y| i boje(c/b) %boja"
    //% inlineInputMode=inline
    export function bit16(n: number, x: number, y: number, boja: string): void {
        switch (boja) {
            case ("c"):
                boja = "C";
                break;
            case ("b"):
                boja = "B";
                break;
            default:
                boja = "C";
        }
        ispis("B16;" + n.toString() + ";" + x.toString() + ";" + y.toString() + ";" + boja);
    }

    
    //% block="$x1 $x2 $x3 $x4 $x5 $x6 $x7 $x8"
    //% blockId="displayRed"
    //% blockHidden=true
    //% inlineInputMode=inline
    export function __red(x1: odabir, x2: odabir, x3: odabir, x4: odabir, x5: odabir, x6: odabir, x7: odabir, x8: odabir): number {
        return (
              x8
            | x7 << 1
            | x6 << 2
            | x5 << 3
            | x4 << 4
            | x3 << 5
            | x2 << 6
            | x1 << 7 );
    }
    
    //% blockId=fooo
    //% block="broj bitmape %bitbr| $foof $foof1 $foof2 $foof3 $foof4 $foof5 $foof6 $foof7"
    //% foof.shadow="displayRed"
    //% foof1.shadow="displayRed"
    //% foof2.shadow="displayRed"
    //% foof3.shadow="displayRed"
    //% foof4.shadow="displayRed"
    //% foof5.shadow="displayRed"
    //% foof6.shadow="displayRed"
    //% foof7.shadow="displayRed"
    //% blockExternalInputs=true
    export function fooo(bitbr: number, foof : number, foof1 : number, foof2 : number, foof3 : number, foof4 : number, foof5 : number, foof6 : number, foof7 : number):void {
        ispis("BIT;" + bitbr.toString() + ";" + foof.toString() + ";" + foof1.toString() + ";" + foof2.toString() + ";" + foof3.toString() + ";" + foof4.toString() + ";" + foof5.toString() + ";" + foof6.toString() + ";" + foof7.toString());
    }

    //% weight=99
    //% blockId=bit8x8
    //% block="definiraj bitmapu 8x8 brojem(0-9) %n i osam redova(0-255) | %red1 %red2 %red3 %red4 %red5 %red6 %red7 %red8 "
    //% inlineInputMode=inline
    export function bit8x8(n: number, red1: number, red2: number, red3: number, red4: number, red5: number, red6: number, red7: number, red8: number): void {
        ispis("BIT;" + n.toString() + ";" + red1.toString() + ";" + red2.toString() + ";" + red3.toString() + ";" + red4.toString() + ";" + red5.toString() + ";" + red6.toString() + ";" + red7.toString() + ";" + red8.toString());
        /*   let zbroj = [128,64,32,16,8,4,2,1] */
    }

    //% weight=98
    //% blockId=isbit8x8
    //% block="ispisi definiranu bitmapu 8x8 (0-9) %n na poziciji  x %x i  y %y| i boje(c/b) %boja"
    //% inlineInputMode=inline
    export function isbit8x8(n: number, x: number, y: number, boja: string): void {
        switch (boja) {
            case ("c"): boja = "C"; break;
            case ("b"): boja = "B"; break;
            default: boja = "C";
        }
        ispis("SPR;" + n.toString() + ";" + x.toString() + ";" + y.toString() + ";" + boja);
    }

    //% weight=97
    //% blockId=scup
    //% block="scroll bitmap UP za %n pixela"
    export function scup(n: number): void {
        ispis("SBU;" + n.toString());
    }

    //% weight=96
    //% blockId=scdown
    //% block="scroll bitmap DOWN za %n pixela"
    export function scdown(n: number): void {
        ispis("SBD;" + n.toString());
    }

    //% weight=95
    //% blockId=sctxtup
    //% block="scroll text UP za 1 red sa rotacijom(y/n) %r"
    export function sctxtup(r: string): void {
        switch (r) {
            case ("y"): r = "R"; break;
            case ("n"): r = null; break;
            case ("Y"): r = "R"; break;
            case ("N"): r = null; break;
            default: r = null;
        }
        ispis("SCU;" + r);
    }

    //% weight=94
    //% blockId=sctxtdown
    //% block="scroll text DOWN za 1 red sa rotacijom(y/n) %r"
    export function sctxtdown(r: string): void {
        switch (r) {
            case ("y"):
                r = "R";
                break;
            case ("n"):
                r = null;
                break;
            case ("Y"):
                r = "R";
                break;
            case ("N"):
                r = null;
                break;
            default:
                r = null;
        }
        ispis("SCD;" + r);
    }

    //% weight=93
    //% blockId=ispunaekrana
    //% block="ispuna ekrana bojom %boja"
    export function ispunaekrana(boja: number): void {
        ispis("FIL;" + boja.toString());
    }

    //% weight=92
    //% blockId=ispispix
    //% block="ispis pixela na poziciju x %x y %y i boje(c/b) %boja"
    //% inlineInputMode=inline
    export function ispispix(x: number, y: number, boja: string): void {
        switch (boja) {
            case ("c"): boja = "C"; break;
            case ("b"): boja = "B"; break;
            default: boja = "C";
        }
        ispis("PIX;" + x.toString() + ";" + y.toString() + ";" + boja);
    }

    //% weight=91
    //% blockId=brisi
    //% block="brisi ekran"
    export function brisi(): void {
        ispis("CLS");
    }

    //% weight=90
    //% blockId=kontrast
    //% block="ispis kontrasta (0-100) %oc"
    export function kontrast(oc: number): void {
        ispis("CON;" + oc.toString());
    }

    //% weight=89
    //% blockId=isbuf
    //% block="ispisi buffer ekrana na display"
    export function isbuf(): void {
    }

    //% weight=88
    //% blockId=ispistxtpix
    //% block="ispis texta %tekst na poziciju x %x y %y i boje(c/b) %boja"
    //% inlineInputMode=inline
    export function ispistxtpix(tekst: string, x: number, y: number, boja: string): void {
        switch (boja) {
            case ("c"): boja = "C"; break;
            case ("b"): boja = "B"; break;
            default: boja = "C";
        }
        ispis(tekst + ";" + x.toString() + ";" + y.toString() +";"+ boja + ";G");
    }

    //% weight=87
    //% blockId=ispistxt
    //% block="ispis texta %tekst na stupac x %x i red y %y  boje(c/b) %boja"
    //% inlineInputMode=inline
    export function ispistxt(tekst: string, x: number, y: number, boja: string): void {
        switch (boja) {
            case ("c"): boja = "C"; break;
            case ("b"): boja = "B"; break;
            default: boja = "C";
        }
        ispis(tekst + ";" + x.toString() + ";" + y.toString() + ";" + boja);
    }

    //% weight=86
    //% blockId=bristxtpoz
    //% block="brisanje texta od %tekst slova na stupac x %x i red y %y i bojom %boja"
    //% inlineInputMode=inline
    export function bristxtpoz(tekst: string, x: number, y: number, boja: string): void {
        let ispuna = [];
        for (let i = 0; i < tekst.length; i++) {
            ispuna.push(" ");
        }
        let celo = ispuna.join("");
        ispis(celo + ";" + x.toString() + ";" + y.toString() + ";0;" + boja);
    }


    //% weight=85
    //% blockId=bitscrolltxt
    //% block="bit scroll prema strani(L/D) %str od reda %x do reda %y sa rotacijom ili bez(y/n) %r"
    //% inlineInputMode=inline
    export function bitscrolltxt(str: string, x: number, y: number, r: string): void {
        switch (str) {
            case ("l"): str = "L"; break;
            case ("d"): str = "R"; break;
            default: str = "R";
        }

        switch (r) {
            case ("y"): r = "R"; break;
            case ("n"): r = null; break;
            case ("Y"): r = "R"; break;
            case ("N"): r = null; break;
            default: r = null;
        }

        ispis("SCC;" + str + ";" + x.toString() + ";" + y.toString() + ";" + r);
    }


    //% weight=84
    //% blockId=lin
    //% block="iscrtavanje linije od x1 %x1 y1 %y1 do x2 %x2 y2 %y2 sa bojom(C/B) %boja"
    //% inlineInputMode=inline
    export function lin(x1: number, y1: number, x2: number, y2: number, boja: string): void {
        switch (boja) {
            case ("c"): boja = "C"; break;
            case ("b"): boja = "B"; break;
            default: boja = "C";
        }

        ispis("LIN;" + x1.toString() + ";" + y1.toString() + ";" + x2.toString() + ";" + y2.toString() + ";" + boja);
    }

    //% weight=83
    //% blockId=kruz
    //% block="iscrtavanje kruznice na x %x y %y radiusa %r sa bojom(C/B) %boja"
    //% inlineInputMode=inline
    export function kruz(x: number, y: number, r: number, boja: string): void {
        switch (boja) {
            case ("c"): boja = "C"; break;
            case ("b"): boja = "B"; break;
            default: boja = "C";
        }

        ispis("CIR;" + x.toString() + ";" + y.toString() + ";" + r.toString() + ";" + boja);
    }

    //% weight=82
    //% blockId=krug
    //% block="iscrtavanje kruga na x %x y %y radiusa %r punjenog bojom(C/B) %fill i boje(C/B) %boja"
    //% inlineInputMode=inline
    export function krug(x: number, y: number, r: number, fill: string, boja: string): void {
        switch (fill) {
            case ("c"): fill = "C"; break;
            case ("b"): fill = "B"; break;
            default: fill = "C";
        }

        switch (boja) {
            case ("c"): boja = "C"; break;
            case ("b"): boja = "B"; break;
            default: boja = "C";
        }

        ispis("CIR;" + x.toString() + ";" + y.toString() + ";" + r.toString() + ";" + fill + ";" + boja);
    }

    //% weight=81
    //% blockId=kvad
    //% block="iscrtavanje kvadrata od x1 %x1 y1 %y1 do x2 %x2 y2 %y2 sa bojom(C/B) %boja"
    //% inlineInputMode=inline
    export function kvad(x1: number, y1: number, x2: number, y2: number, boja: string): void {
        switch (boja) {
            case ("c"): boja = "C"; break;
            case ("b"): boja = "B"; break;
            default: boja = "C";
        }

        ispis("REC;" + x1.toString() + ";" + y1.toString() + ";" + x2.toString() + ";" + y2.toString() + ";" + boja);
    }

    //% weight=81
    //% blockId=tro
    //% block="iscrtavanje trokuta od x1 %x1 y1 %y1 do x2 %x2 y2 %y2 do x3 %x3 y3 %y3 sa bojom(C/B) %boja"
    //% inlineInputMode=inline
    export function tro(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, boja: string): void {
        switch (boja) {
            case ("c"): boja = "C"; break;
            case ("b"): boja = "B"; break;
            default: boja = "C";
        }

        ispis("TRI;" + x1.toString() + ";" + y1.toString() + ";" + x2.toString() + ";" + y2.toString() + ";" + x3.toString() + ";" + y3.toString() + ";" + boja);
    }

    //% weight=80
    //% blockId=troisp
    //% block="iscrtavanje trokuta od x1 %x1 y1 %y1 do x2 %x2 y2 %y2 do x3 %x3 y3 %y3 sa ispunom(C/B) %fill i bojom(C/B) %boja"
    //% inlineInputMode=inline
    export function troisp(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, fill: string, boja: string): void {
        switch (boja) {
            case ("c"): boja = "C"; break;
            case ("b"): boja = "B"; break;
            default: boja = "C";
        }

        switch (fill) {
            case ("c"): fill = "C"; break;
            case ("b"): fill = "B"; break;
            default: fill = "C";
        }

        ispis("TRI;" + x1.toString() + ";" + y1.toString() + ";" + x2.toString() + ";" + y2.toString() + ";" + x3.toString() + ";" + y3.toString() + ";" + fill + ";" + boja);
    }
}
