$('.slider').slick({
    autoplay:true, // 自動再生を設定
    autoplaySpeed:5000, // スライド切り替えの時間を設定
    dots:true // インジケーターを表示
  });

function test(){
    let result;
    const num = document.getElementById("num").value;
    let a = parseInt(num);
    document.getElementById("tit").textContent="Question."+ a;
    document.getElementById("num").value = a + 1;
    
    if(a==1){
        document.getElementById("question").textContent="実在しない猫の品種はどれ？";

        let value = ["ゴールドマッカレルタビー", "シルバーマッカレルタビー", "サファイアマッカレルタビー"];
        let typ = "radio"
        make_opt(value,typ,a);
    }
    if(a==2){
        let radios = document.getElementsByName("option");
        for(let i=0; i<3; i++){
            if(radios[i].checked){
                result = radios[i].value;

                if(result == "サファイアマッカレルタビー"){
                    let res = document.getElementById("result").value;
                    res = parseInt(res);
                    console.log(res);
                    document.getElementById("result").value = res + 1;
                }
                break;
            }
        }

        document.getElementById("question").textContent="猫の爪は全部で何本？";
        
        option.innerHTML='';
        let txt = document.createElement("input");
        txt.setAttribute("type", "text");
        txt.setAttribute("id", "txt");
        option.appendChild(txt);
    }
    if(a==3){
        result = document.getElementById("txt").value;
        if(result == "18"){
            let res = document.getElementById("result").value;
            res = parseInt(res);
            console.log(res);
            document.getElementById("result").value = res + 1;
        }
        document.getElementById("question").textContent="猫が感情表現できる体の部位はどれ？（複数回答）";
        
        option.innerHTML='';
        let value = ["尻尾", "ひげ", "耳"];
        let typ = "checkbox"
        make_opt(value,typ,a);
    }
    if(a==4){
        let cb = document.getElementsByName("option");
        let ans = 0
        
        for(let i=0; i<3; i++){
            if(cb[i].checked == true){ans += 1}
        }
        if(ans==3){
            var res = document.getElementById("result").value;
            res = parseInt(res);
            console.log(res);
            document.getElementById("result").value = res + 1;
        }

        document.getElementById("tit").textContent="結果発表";
        
        let element = document.getElementById("question");
        element.className = "answer-style";
        
        var res = document.getElementById("result").value;
        let body = "正答数：" + res + "問"
        if(res==3){body += "　全問正解おめでとう"}
        element.textContent = body;
        option.innerHTML='';
        butt.style.display ="none";
    }
}
function make_opt(value,typ,a){
    for (let i = 0; i < value.length; i++) {
        let op = document.createElement("div");
        let radio = document.createElement("input");
        let id = "rad" + i;
        let name = "option";
        let val = value[i];
        console.log(val);

        radio.setAttribute("type", typ);
        radio.setAttribute("value", val);
        radio.setAttribute("id", id);
        radio.setAttribute("name", name);
        
        let label = document.createElement("label");
        label.setAttribute("for", id);
        label.innerHTML = val;

        var br = document.createElement('br');
        op.appendChild(br);
        op.appendChild(radio);
        op.appendChild(label);

        option.appendChild(op);
    }
}
