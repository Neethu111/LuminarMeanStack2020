class bank {
    static getaccount() {
        let data = {
            neethu: { username: "neethu", password: "neethu", acno: "1001", balance:50000 },
            test1: { username: "test1", password: "test1", acno: "1002", balance:40000 },
            tes2: { username: "test2", password: "test2", acno: "1003", balance:60000},
            test3: { username: "test3", password: "test3", acno: "1004", balance:70000},
        }
        return data;
    }


    static login() {
        let username = document.querySelector("#uname").value
        let pwd = document.querySelector("#pwd").value
        let data = bank.getaccount()
        if (username in data) {
            let password = data[username]["password"]
            if (pwd == password) {
                swal("Good job!", "You clicked the button!", "success");
                setTimeout(()=>window.location.href="home.html",5000)
            }
            else {
                alert("Invalid login")
            }
        }
    }


    static deposit(){
        let uname = document.querySelector("#uname").value
        let amt = Number(document.querySelector("#amount").value);
        //let btag=document.querySelector("#bal");
        let btag=document.querySelector("#bal");
        let data=bank.getaccount()
        if (uname in data) {
            data[uname]["balance"]+=amt
            let bal=data[uname]["balance"]
            //alert("avlbal=" + data[uname]["balance"])
            btag.textContent="Available balance:"+bal;
        }
        else {
            swal("invalid user")
        }

    }


    static withdraw(){
        let uname = document.querySelector("#uname1").value
        let amt = Number(document.querySelector("#amount1").value);
        //let btag=document.querySelector("#bal");
        let btag=document.querySelector("#bal");
        let data=bank.getaccount()

        if (uname in data) {
            let avlbal=data[uname]["balance"]
            if(amt>avlbal)
            {
                alert("Insufficient balance")
            }
            else
            {
            data[uname]["balance"]-=amt
            let bal=data[uname]["balance"]
            //alert("avlbal=" + data[uname]["balance"])
            btag.textContent="Available balance:"+bal;
            }
        }
        else {
            swal("invalid user")
        }

    }


    
}
