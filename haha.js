const user = {

    firstName: "John",
    lastName: "Doe",
    pets:["cat","dog","fish"],
    listPets(){
        this.pets.forEach(function(pet){
            console.log(`${this.firstName}'s ${pet}`);
        },this);
    }
    
    };

user.listPets();
