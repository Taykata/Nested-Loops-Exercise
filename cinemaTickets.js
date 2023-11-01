function cinemaTickets(input) {

    let index = 0;
    let command = input[index];
    index++;

    let countStudetTicket = 0;
    let countStandardTicket = 0;
    let countKidTicket = 0;
    let countTotalTicket = 0;

    while (command !== "Finish") {
        let moveName = command;

        let freeSpace = Number(input[index]);
        index++;

        let ticketType = input[index];
        index++;

        let countSellTicket = 0;

        while (ticketType !== "End") {
            countSellTicket++;

            switch (ticketType) {
                case "student" : countStudetTicket++; break;
                case "standard" : countStandardTicket++; break;
                case "kid" : countKidTicket++; break;
            }

            if (countSellTicket === freeSpace) {
                break;
            }

            ticketType = input[index];
            index++;
        }

        countTotalTicket += countSellTicket;
        let percentageFull = countSellTicket / freeSpace * 100;
        console.log(`${moveName} - ${percentageFull.toFixed(2)}% full.`);
        
        command = input[index];
        index++;
    }

    let percentageStudentTicket = countStudetTicket / countTotalTicket * 100;
    let percentageStandartTicket = countStandardTicket / countTotalTicket * 100;
    let percentageKidTicket = countKidTicket / countTotalTicket * 100;

    console.log(`Total tickets: ${countTotalTicket}`);
    console.log(`${percentageStudentTicket.toFixed(2)}% student tickets.`);
    console.log(`${percentageStandartTicket.toFixed(2)}% standard tickets.`);
    console.log(`${percentageKidTicket.toFixed(2)}% kids tickets.`);

}

cinemaTickets(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"]);