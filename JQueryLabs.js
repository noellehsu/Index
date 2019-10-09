    

    //用jQuery版本寫BMI 
    //----------------//
    function GetBmi(height, weight) {
        var bmi = 0;
        H = height / 100;
        bmi = weight / (H * H);
        return bmi;
    }

    function GetValue() {
        var txbheight = $('#txbheight').val();
        var txbweight = $('#txbweight').val();
        var bmi = GetBmi(txbheight, txbweight);
        $('#result').html('你的BMI是：' + bmi); //.html() 表示我要直接把值直接顯示在頁面上
        //也可以用.val() 或 .after() 試試看
    }

    function RemoveValue(){
        $('#result').html('');
    }

    //初始化
    $(document).ready(function () {
        $('#Button1').click(GetValue); //這邊的GetValue不用加()因為他是委派，不是方法
        $('#Button2').click(RemoveValue); 
    });



    //集體勾選/取消 
    //----------------//


    //當checkAll被點選之後
    $(document).ready(function () {
        $("#CheckAll").click(function () {
            if ($("#CheckAll").prop("checked")) { //如果全選按鈕有被選擇的話是true
                $("#CheckBoxGroup input").each(function () {
                    $(this).prop("checked", true); //所有項目被勾選
                })
            } else {
                $("#CheckBoxGroup input").each(function () {
                    $(this).prop("checked", false); //所有項目被取消勾選
                })
            }
        })
    })


    //讀取屬性值
    //$("input").prop("checked");

    //設定屬性值
    //$("img").attr("src",  "myimage.jpg");
    //$("input").prop("checked", true);

    //刪除屬性
    //$("p").removeAttr("id");
    //透過 jQuery設定或取得屬性值



    //改變圖片圓角
    //----------------//

    $(document).ready(function () {
        $('#sel01').change(function (e) { //下拉式選單改變發生時
            var val = $(this).val();  //若選到15px這個value
            $('#ImgGroup2 img').removeClass();   //移除#ImgGroup2所有圖片的class="img-responsive"
            $('#ImgGroup2 img').addClass(val);   //掛上value="br15"那一行

        });
    });
    $(document).ready(function () {
        $('#ImgGroup2 img').hover(function () {   
            $(this).css("cursor", "pointer"); //滑鼠移至圖片就會變成手指鼠標
            $(this).css("transform", "scale(1.1)").css("transition-duration", "0.1s"); //讓圖片變大
        }, function () {
            $(this).css("transform", "scale(1)").css("transition-duration", "0.1s");
        });
    });

    // 打jpDocReady就會跳出一行函式，表示整個頁面載完再執行function
    // 類似window.onload的意思
    // $(document).ready(function () {
    //     init();
    // });
