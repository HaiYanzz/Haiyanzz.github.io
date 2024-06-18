let newYearTimer = null;
var newYear = () => {
    if (clearTimeout(newYearTimer), !document.querySelector("#newYear")) return;
    let e = new Date("2025-01-29 00:00:00").getTime() / 1e3,
        n = {0: "周日", 1: "周一", 2: "周二", 3: "周三", 4: "周四", 5: "周五", 6: "周六"};

    function t(e) {
        return e > 9 ? e : "0" + e
    }

    !function a() {
        let r = new Date;
        document.querySelector("#newYear .today").innerHTML = r.getFullYear() + "-" + (r.getMonth() + 1) + "-" + r.getDate() + " " + n[r.getDay()];
        let o = e - Math.round(r.getTime() / 1e3);
        if (o < 0) document.querySelector("#newYear .title").innerHTML = "Happy New Year!", document.querySelector("#newYear .newYear-time").innerHTML = '<span class="happyNewYear">新年快乐</p>'; else if (document.querySelector("#newYear .title").innerHTML = "距离2025年春节：", o > 86400) document.querySelector("#newYear .newYear-time").innerHTML = `<span class="day">${Math.ceil(o / 86400)}<span class="unit">天</span></span>`; else {
            let e = t(parseInt(o / 3600));
            o %= 3600;
            let n = t(parseInt(o / 60)), r = t(o %= 60);
            document.querySelector("#newYear .newYear-time").innerHTML = `<span class="time">${e}:${n}:${r}</span></span>`, newYearTimer = setTimeout(a, 1e3)
        }
    }(), jQuery(document).ready(function (e) {
        e("#newYear").wpSuperSnow({
            flakes: [""],
            totalFlakes: "100",
            zIndex: "999999",
            maxSize: "30",
            maxDuration: "20",
            useFlakeTrans: !1
        })
    })
};
document.addEventListener("pjax:complete", newYear), document.addEventListener("DOMContentLoaded", newYear);