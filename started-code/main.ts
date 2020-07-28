import {StringManipulationService,NumberManipulationService} from "./main-service";

class StringManipulations implements StringManipulationService {
    print(word:string):void{
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word[1]);
        console.log(word.concat("Hey There"));
        console.log(word.slice(0));
        console.log(word.length);
    }

    printWithSpace(sentence:string):void{
        console.log(sentence.split("").join(" "));
    }

    findVowel(str: string):void{
        if(str.match(/[aeiou]/gi)==null){
            console.log("0");
        }
        else{
            console.log(str.match(/[aeiou]/gi));
        }
    }
}

class NumbersManipulations implements NumberManipulationService {
    findPrime(num: number) : void{
        if(num%2!=0){
            console.log(num+ " is a Prime Number");
        }
        else{
            console.log(num+ " is a Even Number");
        }
    }
    findMagic(num: number) : void{
        let result :number;
        if(num==0){
            result = 0;
        }
        else if(num%9==0){
            result=9;
        }
        else{
            result= num%9;
        }
        if(result==1){
            console.log(num + " is a magic number");
        }
        else{
            console.log(num + " is not a magic number");
        }
    }
}
