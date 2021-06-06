// File APIに対応しているか確認
if(window.File) {
    var result = document.getElementById('result');
    var select = document.getElementById('select');
 
    // ファイルが選択されたとき
    select.addEventListener('change', function(e) {
        // 選択されたファイルの情報を取得
        var fileData = e.target.files[0];
 
        var reader = new FileReader();
        // ファイル読み取りに失敗したとき
        reader.onerror = function() {
            alert('ファイル読み取りに失敗しました')
        }
        // ファイル読み取りに成功したとき
        reader.onload = function() {
            // 行単位で配列にする
            var lineArr = reader.result.split("\n");
            // 行と列の二次元配列にする
            var itemArr = [];
            var itemArrCheck = [];
            var itemArrCheckCount = 0;
            for (var i = 0; i < lineArr.length; i++) {
                itemArr[i] = lineArr[i].split(",");
            }
            var set;
            var unitLimit =["順","覚醒","イベント名","アイドル名","LV","cost",130000,135000,200000,165000]
            var semeSum,bouSum,tokusemeSum,tokubouSum,sum,count=0;
            for (var i1 = 1; i1 < itemArr.length; i1++) {
                for (var i2 = 2; i2 < itemArr.length; i2++) {
                     for (var i3 = 3; i3 < itemArr.length; i3++) {
                        for (var i4 = 4; i4 < itemArr.length; i4++) {
                              for (var i5 = 5; i5 < itemArr.length; i5++) {
                                  for (var i6 = 6; i6 < itemArr.length; i6++) {

                                    if(count++%10000000==0){
                                          console.log(count)
                                      }
                                    set = new Set([i1,i2,i3,i4,i5,i6]);
//                                    setUnit  = new Set(itemArr[i1][3],itemArr[i2][3],itemArr[i3][3],itemArr[i4][3],itemArr[i5][3],itemArr[i6][3]);
                                    semeSum=(parseInt(itemArr[i1][6])+parseInt(itemArr[i2][6])+parseInt(itemArr[i3][6])+parseInt(itemArr[i4][6])+parseInt(itemArr[i5][6])+parseInt(itemArr[i6][6]));
                                    bouSum=(parseInt(itemArr[i1][7])+parseInt(itemArr[i2][7])+parseInt(itemArr[i3][7])+parseInt(itemArr[i4][7])+parseInt(itemArr[i5][7])+parseInt(itemArr[i6][7]));
                                    tokusemeSum=(parseInt(itemArr[i1][8])+parseInt(itemArr[i2][8])+parseInt(itemArr[i3][8])+parseInt(itemArr[i4][8])+parseInt(itemArr[i5][8])+parseInt(itemArr[i6][8]));
                                    tokubouSum=(parseInt(itemArr[i1][9])+parseInt(itemArr[i2][9])+parseInt(itemArr[i3][9])+parseInt(itemArr[i4][9])+parseInt(itemArr[i5][9])+parseInt(itemArr[i6][9]));
                                    sum=((130000-semeSum)+(135000-bouSum)+(200000-tokusemeSum)+(165000-tokubouSum));
                                    //                                   if(set.size==6){
                                        //console.log(sum<0 || set.size==6)
                                        if(set.size==6){
                                            itemArrCheck[itemArrCheckCount++] =  [i1,i2,i3,i4,i5,i6].sort(function(a,b){
                                                if( a < b ) return -1;
                                                if( a > b ) return 1;
                                                return 0;
                                            });
                                           if(semeSum<130000 && bouSum <135000 && tokusemeSum < 200000 && tokubouSum<165000){
                                            if(sum<4000){
                                                //console.log("攻:"+semeSum+"　守:"+bouSum+"　特攻:"+tokusemeSum+"　特守:"+tokubouSum+"差分:"+sum)
                                                //console.log("sum<2000")
                                                console.log("差分4000以下:"+sum+" "+
                                                    itemArr[i1][1]+itemArr[i1][2]+itemArr[i1][3]+"/"+
                                                    itemArr[i2][1]+itemArr[i2][2]+itemArr[i2][3]+"/"+
                                                    itemArr[i3][1]+itemArr[i3][2]+itemArr[i3][3]+"/"+
                                                    itemArr[i4][1]+itemArr[i4][2]+itemArr[i4][3]+"/"+
                                                    itemArr[i5][1]+itemArr[i5][2]+itemArr[i5][3]+"/"+
                                                    itemArr[i6][1]+itemArr[i6][2]+itemArr[i6][3]);
                                            }else{
                                               // console.log(i1+":"+i2+":"+i3+":"+i4+":"+i5+":"+i6)
                                               // console.log("攻:"+semeSum+"　守:"+bouSum+"　特攻:"+tokusemeSum+"　特守:"+tokubouSum+"差分:"+sum)
                                            //console.log("Else sum<2000:"+sum)
                                               // break;
                                            }
                                        } else{
                                              //  console.log(i1+":"+i2+":"+i3+":"+i4+":"+i5+":"+i6)
                                            //console.log("Else sum4攻:"+semeSum+"　守:"+bouSum+"　特攻:"+tokusemeSum+"　特守:"+tokubouSum+"差分:"+sum)
                                        //                                            console.log("Else semeSum<140000 && bouSum <145000 && tokusemeSum < 250000 && tokubouSum<185000");
                                            //break;
                                        }
                                    } else {
//                                        console.log("setSize")
                                       // break;
                                    }
                                                
                                  }
                              }
                          }
                    }
                }
            }
            console.log(itemArr);
            console.log(itemArrCheck);
            var setCheck = new Set(itemArrCheck);
            console.log(setCheck);

  


            // tableで出力
            
            var insert = '<table>';
            for (var i = 0; i < itemArr.length; i++) {
                insert += '<tr>';
                for (var j = 0; j < itemArr[i].length; j++) {
                    insert += '<td>';
                    insert += itemArr[i][j];
                    insert += '</td>';
                }
                insert += '</tr>';
            }
            insert += '</table>';
            result.innerHTML = insert;//**/
        }
 
        // ファイル読み取りを実行
        reader.readAsText(fileData);
    }, false);
}