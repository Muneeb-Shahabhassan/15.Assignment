let guest_list : string[] =[`Shahid`,`Raza`,`Rafay`,`Maroof`,`Hamza`]
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Respeted Sir/Madam ` + guest_list [i] + `, \n We invitedd you on dinner tomorrow. \n\n Thanks you`)

}

let not_present : string = `Raza`;
let new_guest : string = `Azam Khan`;
guest_list[1] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Respeted Sir/Madam ` + guest_list [i] + `, \n We invitedd you on dinner tomorrow. \n\n Thanks you`)
    
}
console.log(`Mr . ${not_present} will not coming tomorrow dinner. `);
