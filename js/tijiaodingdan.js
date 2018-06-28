/**
 * Created by Administrator on 2018/6/7.
 */
window.onload=function () {
    var myform=document.address;
    var province=myform.province;
    var city=myform.city;
    var area=myform.area;

    province.onfocus=function(){
        province.innerHTML="<option value=''>请选择省</option>";
        var num=provinceList.length;
        for(var i=0;i<num;i++){
            var option=document.createElement("option");
            option.text=provinceList[i].name;
            this.appendChild(option)
        }
    }
    var num;
    province.onchange=function(){
        city.innerHTML="<option value=''>请选择市</option>";
        num=this.selectedIndex-1;
        var arr=provinceList[num].cityList;
        for(var i=0;i<arr.length;i++){
            var option=document.createElement("option");
            option.text=arr[i].name;
            city.appendChild(option)
        }
    }
    var num1;
    city.onchange=function(){
        area.innerHTML="<option value=''>请选择区</option>";
        num1=this.selectedIndex-1;
        var arr=provinceList[num].cityList[num1].areaList;
        for(var i=0;i<arr.length;i++){
            var option=document.createElement("option");
            option.text=arr[i];
            area.appendChild(option)
        }
    }
}