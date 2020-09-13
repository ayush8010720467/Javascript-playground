(function(){
    print = console.log
    console.log = function (...args) {
        var res = "";
        var a = []
        print(...args)
        for (let i = 0; i < arguments.length; i++) {
            try {
                if(eval(`${arguments[i]}`)){
                res = res + eval(`${arguments[i]}`)
                }
                else{
                    res = res + arguments[i];
                }
            } catch (e) {
                res = res + arguments[i];
            }
        }
        return res;
    }
}())
window.executeCode = {
    runcode: function () {

        var code = myCodeMirror.doc.getValue();
        var result = '';
        var code_execute = function (code_value) {
            return eval(code_value);
        }
        try {
            result = result + code_execute(code);
            document.getElementById('result').classList.remove("error");
            document.getElementById('result').classList.add("sucess");
        } catch (e) {
            result = result + e;
            document.getElementById('result').classList.remove("sucess");
            document.getElementById('result').classList.add("error");
        }
        document.getElementById('result').value = result;
    }

}
var myCodeMirror = CodeMirror(document.getElementById('code'), {
    mode:  "javascript",
    lineNumbers: true,
    value: "function myScript(){return 100;}\n"
  });
  myCodeMirror.setSize('100%','100%');