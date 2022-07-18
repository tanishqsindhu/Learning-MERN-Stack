console.log(validUserNames(['mark','tanishq','guoaheoguhaoehgo','fuaegifu','sindhu']));

function validUserNames(usernames) {
    return usernames.filter((username)=>{
        return username.length<10;
    })
  }