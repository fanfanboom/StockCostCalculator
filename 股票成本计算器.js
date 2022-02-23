function stockcostcalculator() {
    let inpcontroll=true;
    let prices=[];
    let numbers=[];
    let p='';
    let n='';
    while (inpcontroll){
        p=prompt('请输入价格（空表示输入结束）');
        if (p === ''){
            inpcontroll=false;
        }else{
            n=prompt('请输入交易数量，如100');
            prices.push(Number.parseFloat(p));
            numbers.push(Number.parseInt(n));
        }
    }
    let infotext='共交易'+prices.length.toString()+'次<br>';
    let sumcost=0;
    let sumnumbers=0;
    for (let i = 0; i < prices.length; i++) {
        sumcost+=prices[i]*numbers[i];
        sumnumbers+=numbers[i];
        infotext=infotext+(i+1).toString()+'.成交价：'+prices[i].toString()+', 成交数量：'+numbers[i].toString()+'.<br>';
    }
    let ave=sumcost/sumnumbers;
    return {ave,sumcost,sumnumbers,infotext};
}