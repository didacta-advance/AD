input.onButtonPressed(Button.A, function () {

})
function ispis(tekst: string) {
    dd = tekst.length
    if (dd < 31) {
        salji(tekst)
    } else {
        salji("" + tekst.substr(0, 30) + "+")
        salji(tekst.substr(30, dd))
    }
}
function salji(tekst: string) {
    duz = tekst.length
    let buf = pins.createBuffer(duz);
    for (let n = 0; n <= duz - 1; n++) {
        let bb = tekst.charCodeAt(n);
        buf.setNumber(NumberFormat.UInt8LE, n, bb);
    }
    pins.i2cWriteBuffer(0x11, buf, false);
    basic.pause(30)
}
let dd = 0
let duz = 0



input.onButtonPressed(Button.A, function () {
    Display.ispunaekrana(254);
    Display.isbuf();
})

//% color=218 weight=103 
namespace Display {


    //% weight=102
    //% blockId=bit16
    //% block="iscrtaj bitmapu 16x16 broja %n na poziciji  x %x i  y %y| i boje(c/b) %boja"
    export function bit16(n: number, x: number, y: number, boja: string): void {
        switch (boja) {
            case ("c"): boja = "C";
            case ("b"): boja = "B";
            default: boja = "C";
        }
        ispis("B16;" + n.toString() + ";" + x.toString() + ";" + y.toString() + ";" + boja);
    }

    //% weight=101
    //%block = %x1 %x2 %x3 %x4 %x5 %x6 %x7 %x8
    //% inlineInputMode=inline
    export class Red1 {
        public izracun(x1: number, x2: number, x3: number, x4: number, x5: number, x6: number, x7: number, x8: number){
            return x1+x2+x3+x4+x5+x6+x7+x8;
        }
    }
    

    //% weight=99
    //% blockId=bit8x8
    //% block="definiraj bitmapu 8x8 brojem(0-9) %n i sedam boja(0-255) %boja1 %boja2 %boja3 %boja4 %boja5 %boja6 %boja7 %boja8 |  "
    export function bit8x8(n: number, boja1: number, boja2: number, boja3: number, boja4: number, boja5: number, boja6: number, boja7: number, boja8: number, boja9: number): void {
        ispis("BIT;" + n.toString() + ";" + boja1.toString() + ";" + boja2.toString() + ";" + boja3.toString() + ";" + boja4.toString() + ";" + boja5.toString() + ";" + boja6.toString() + ";" + boja7.toString() + ";" + boja8.toString());
        /*   let zbroj = [128,64,32,16,8,4,2,1] */
    }

    //% weight=98
    //% blockId=isbit8x8
    //% block="ispisi definiranu bitmapu 8x8 (0-9) %n na poziciji  x %x i  y %y| i boje(c/b) %boja"
    export function isbit8x8(n: number, x: number, y: number, boja: string): void {
        switch (boja) {
            case ("c"): boja = "C";
            case ("b"): boja = "B";
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
            case ("y"): r = "R";
            case ("n"): r = null;
            case ("Y"): r = "R";
            case ("N"): r = null;
            default: r = null;
        }
        ispis("SCU;" + r);
    }

    //% weight=94
    //% blockId=sctxtdown
    //% block="scroll text DOWN za 1 red sa rotacijom(y/n) %r"
    export function sctxtdown(r: string): void {
        switch (r) {
            case ("y"): r = "R";
            case ("n"): r = null;
            case ("Y"): r = "R";
            case ("N"): r = null;
            default: r = null;
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
    export function ispispix(x: number, y: number, boja: string): void {
        switch (boja) {
            case ("c"): boja = "C";
            case ("b"): boja = "B";
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
        ispis("DIS");
    }

    //% weight=88
    //% blockId=ispistxtpix
    //% block="ispis texta %tekst na poziciju x %x y %y i boje(c/b) %boja"
    export function ispistxtpix(tekst: string, x: number, y: number): void {
        ispis(tekst + ";" + x.toString() + ";" + y.toString() + ";G");
    }

    //% weight=87
    //% blockId=ispistxt
    //% block="ispis texta %tekst na stupac x %x i red y %y  boje(c/b) %boja"
    export function ispistxt(tekst: string, x: number, y: number, boja: string): void {
        switch (boja) {
            case ("c"): boja = "C";
            case ("b"): boja = "B";
            default: boja = "C";
        }
        ispis(tekst + ";" + x.toString() + ";" + y.toString() + ";0;" + boja);
    }

    //% weight=86
    //% blockId=bristxtpoz
    //% block="brisanje texta od %tekst slova na stupac x %x i red y %y"
    export function bristxtpoz(tekst: string, x: number, y: number, boja: string): void {
        let ispuna = [];
        for (let i = 0; i < tekst.length; i++) {
            ispuna.push(" ");
        }
        let celo = ispuna.join("");
        ispis(celo + ";" + x.toString() + ";" + y.toString() + ";0;");
    }


    //% weight=85
    //% blockId=bitscrolltxt
    //% block="bit scroll prema strani(L/D) %str od reda %x do reda %y sa rotacijom ili bez(y/n) %r"
    export function bitscrolltxt(str: string, x: number, y: number, r: string): void {
        switch (str) {
            case ("l"): str = "L";
            case ("d"): str = "R";
            default: str = "R";
        }

        switch (r) {
            case ("y"): r = "R";
            case ("n"): r = null;
            case ("Y"): r = "R";
            case ("N"): r = null;
            default: r = null;
        }

        ispis("SCC;" + str + ";" + x.toString() + ";" + y.toString() + ";" + r);
    }


    //% weight=84
    //% blockId=lin
    //% block="iscrtavanje linije od x1 %x1 y1 %y1 do x2 %x2 y2 %y2 sa bojom(C/B) %boja"
    export function lin(x1: number, y1: number, x2: number, y2: number, boja: string): void {
        switch (boja) {
            case ("c"): boja = "C";
            case ("b"): boja = "B";
            default: boja = "C";
        }

        ispis("LIN;" + x1.toString() + ";" + y1.toString() + ";" + x2.toString() + ";" + y2.toString() + ";" + boja);
    }

    //% weight=83
    //% blockId=kruz
    //% block="iscrtavanje kruznice na x %x y %y radiusa %r sa bojom(C/B) %boja"
    export function kruz(x: number, y: number, r: number, boja: string): void {
        switch (boja) {
            case ("c"): boja = "C";
            case ("b"): boja = "B";
            default: boja = "C";
        }

        ispis("CIR;" + x.toString() + ";" + y.toString() + ";" + r.toString() + ";" + boja);
    }

    //% weight=82
    //% blockId=krug
    //% block="iscrtavanje kruga na x %x y %y radiusa %r punjenog bojom(C/B) %fill i boje(C/B) %boja"
    export function krug(x: number, y: number, r: number, fill: string, boja: string): void {
        switch (fill) {
            case ("c"): fill = "C";
            case ("b"): fill = "B";
            default: fill = "C";
        }

        switch (boja) {
            case ("c"): boja = "C";
            case ("b"): boja = "B";
            default: boja = "C";
        }

        ispis("CIR;" + x.toString() + ";" + y.toString() + ";" + r.toString() + ";" + fill + ";" + boja);
    }

    //% weight=81
    //% blockId=kvad
    //% block="iscrtavanje kvadrata od x1 %x1 y1 %y1 do x2 %x2 y2 %y2 sa bojom(C/B) %boja"
    export function kvad(x1: number, y1: number, x2: number, y2: number, boja: string): void {
        switch (boja) {
            case ("c"): boja = "C";
            case ("b"): boja = "B";
            default: boja = "C";
        }

        ispis("REC;" + x1.toString() + ";" + y1.toString() + ";" + x2.toString() + ";" + y2.toString() + ";" + boja);
    }

    //% weight=81
    //% blockId=tro
    //% block="iscrtavanje trokuta od x1 %x1 y1 %y1 do x2 %x2 y2 %y2 do x3 %x3 y3 %y3 sa bojom(C/B) %boja"
    export function tro(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, boja: string): void {
        switch (boja) {
            case ("c"): boja = "C";
            case ("b"): boja = "B";
            default: boja = "C";
        }

        ispis("TRI;" + x1.toString() + ";" + y1.toString() + ";" + x2.toString() + ";" + y2.toString() + ";" + x3.toString() + ";" + y3.toString() + ";" + boja);
    }

    //% weight=80
    //% blockId=troisp
    //% block="iscrtavanje trokuta od x1 %x1 y1 %y1 do x2 %x2 y2 %y2 do x3 %x3 y3 %y3 sa ispunom(C/B) %fill i bojom(C/B) %boja"
    export function troisp(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, fill: string, boja: string): void {
        switch (boja) {
            case ("c"): boja = "C";
            case ("b"): boja = "B";
            default: boja = "C";
        }

        switch (fill) {
            case ("c"): fill = "C";
            case ("b"): fill = "B";
            default: fill = "C";
        }

        ispis("TRI;" + x1.toString() + ";" + y1.toString() + ";" + x2.toString() + ";" + y2.toString() + ";" + x3.toString() + ";" + y3.toString() + ";" + fill + ";" + boja);
    }
}
