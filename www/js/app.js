function addTodoPicture() {
    navigator.camera.getPicture(addTodo, function() {
        alert("Failed to get camera.");
    }, {
        quality : 50,
        destinationType : Camera.DestinationType.FILE_URI,
        targetWidth : 100,
        targetHeight : 100
    });
};

        
// function addTodo(camera_url) {
//     var title = $("#todo-title").val();
//     var body = $("#todo-body").val();
//     var img_tag = "";
//     if (camera_url) {
//         img_tag = "<img src='" + camera_url + "'>";
//     }
//     var today = Date
    
//     var now   = new today();
//     var Year = now.getFullYear();
//     var Month = now.getMonth() + 1;
//     var Day = now.getDate();
    
//     var Years=String(Year)
//     var Months=String(Month)
//     var Days=String(Day)

//     var day =Years+"-"+Months+"-"+Days;
//     var id =1;
// //ここからDBに繋げて登録させる
//    var apikey = "e5487cf4017eedf884be6412ce8533eb7cc7479f476fb1eff68d3b11a9d06c17";
//    var clientkey = "507880bfde91eee6800847a86657e56710a4313612cf4be1df8ca73dc1df7401";
//     var ncmb = new NCMB(apikey,clientkey);

// // NCMB.Objectのサブクラスを生成
//     var BASSARI = ncmb.DataStore("BASSARI");

// // クラスの新しいインスタンスを生成
//     var bassari = new BASSARI();

//   bassari.set("username",id)
//          .set("title",title)//捨てたものや買ったものの名前
//          .set("start",now)//登録した日の日付
//          .set("month",Month) //カレンダーで月のものを表示させるためdateから月だけを取れない時はこれを使う 今のところMonth自体になにも入っていないので動かない
//          .set("body",body)//詳細
//          .set("dansyari",1)//捨てたものか買ったものかを判定するために必要かも？買ったものなら１、捨てたものなら０的な
//          //写真を保存できるか知らないのでエラーがでないよう、とりあえずは画像の保存は作っていない
//          .save()
//          .then(function(gameScore){
//           // 保存後の処理はリストに戻り登録したものを表示させる
//           $.mobile.changePage($("#list-page"));
//           $("#todo-list").append("<li>" + img_tag + "<h3>" + title + "</h3>" + body + "</li>")
//           $("#todo-list").listview('refresh');
//          })
//          .catch(function(err){
//           // エラー処理logを出すかは悩み中
//          });
// };