function specialNumbers(input) {

    let num = Number(input[0]);
    let n1 = false;
    let n2 = false;
    let n3 = false;
    let n4 = false;
    let nCounter = 0;

    let buff = "";

    for (let i = 1111; i <= 9999; i++) {
        nCounter = 0;
        let ready = "";
        let oneNumber = 0;
        let numAsString = String(i);
        for (let index = 0; index <= numAsString.length - 1; index++) {
            oneNumber = numAsString[index];

            if (num % Number(oneNumber) === 0) {
                nCounter++;

                if (nCounter === 1) {
                    n1 = true;
                } else if (nCounter === 2) {
                    n2 = true;
                } else if (nCounter === 3) {
                    n3 = true;
                } else if (nCounter === 4) {
                    n4 = true;
                }

                ready += String(oneNumber);

                if (n1 && n2 && n3 && n4) {
                    buff += Number(ready) + " ";
                    n1 = false;
                    n2 = false;
                    n3 = false;
                    n4 = false;
                }
            }
        }
    }

    console.log(buff);

}

specialNumbers(["3"]);