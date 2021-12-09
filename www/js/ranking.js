//
//  tapGame.js
//  MonacaFirstApp
//
//  Created by Natsumo Ikeda on 2016/07/01.
//  Copyright 2017 FUJITSU CLOUD TECHNOLOGIES LIMITED All Rights Reserved.
//
    var APPLICATION_KEY ="5853cb26f8a155c90bb80a3e341f021f497ef77496311ab6ba01f38c561e50d3";
    var CLIENT_KEY ="d1b81480fc74e86cc1bb2d28123e1107c23c9055afd935b396b264df60e42dba";
// 「ランキングを見る」ボタン押下時の処理
function toRanking() {
    // データ取得
    checkRanking();
    // ランキング画面へ遷移
    window.location.href = "#ranking-page";
}

// 【mBaaS】保存したデータの検索と取得
function checkRanking() {
    // **********【問題２】ランキングを表示しよう！**********
    let ncmb = new NCMB(APPLICATION_KEY,CLIENT_KEY);
    let DS = ncmb.DataStore("GameScore");
    DS.order("score",true).limit(5).checkRanking()
    .then (function(results){}      
    for (i=0;i<DS.length;i++){
      var dataName = 
    }
      setData(results);
    })
    .catch(function(error){
      console.log("検索に失敗しました。");
    })
   
    // ******************************************************
}

// テーブルにデータを設定
function setData(array) {
   var table = document.getElementById("rankingTable");
    for (i=0; i<array.length; i++) {
        // 名前の設定
        var name = table.rows[i].cells[1];
        name.innerHTML = array[i].name + "さん";
        // スコアの設定
        var score = table.rows[i].cells[2];
        score.innerHTML = array[i].score + "連打";
    }   
}







