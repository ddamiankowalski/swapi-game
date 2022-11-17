import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  /**
   * A method that returns a random number spanning from min/max
   * @param min minumum number
   * @param max maximum number
   * @returns random number
   */
  public getRandomNumber(min: number, max: number): number {
    return Math.floor(min + Math.random()*(max - min + 1));
  }

  /**
   * UUID function
   * @returns a string
   */
   public uuid(): string {
    var h=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    var k=['x','x','x','x','x','x','x','x','-','x','x','x','x','-','4','x','x','x','-','y','x','x','x','-','x','x','x','x','x','x','x','x','x','x','x','x'];
    var u='',i=0,rb=Math.random()*0xffffffff|0;
    while(i++<36) {
        var c=k[i-1],r=rb&0xf,v=c=='x'?r:(r&0x3|0x8);
        u+=(c=='-'||c=='4')?c:h[v];rb=i%8==0?Math.random()*0xffffffff|0:rb>>4
    }
    return u
}
}
