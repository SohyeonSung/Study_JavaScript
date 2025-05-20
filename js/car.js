    /*(실습) 옵션 선택에 따라 차량금액 변경처리
    기본차량가액에서 시작해서 옵션금액 변경시 차량금액 변경하기
    - 체크상태 : 옵션 금액 더하기
    - 체크해제 : 옵션 금액 빼기
    ***************************/
    let totalValue = 0; // 기본차량가액 + 옵션금액
    let totalTag;
    window.onload = function(){
        console.log(">> window.onload 이벤트 처리중~");
        totalTag = document.getElementById("total");
        totalValue = parseInt(totalTag.value);
        
        let opts = document.getElementsByClassName("opt");
        for (let opt of opts) {
            opt.addEventListener("change", computeOpt); //change 이벤트 연결
        }        
    };
    
    function computeOpt() {
        console.log("this : " + this);
        if (this.checked) { // 옵션금액 더하기
            totalValue += parseInt(this.value);
        } else { // 옵션금액 빼기
            totalValue -= parseInt(this.value);
        }
        //화면에 표시
        totalTag.value = totalValue;
    }