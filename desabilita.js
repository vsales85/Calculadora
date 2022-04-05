function Enableddl(chkddl) {
    var ddl  = document.getElementById("DDL");
    var ddl2  = document.getElementById("DDL2");
    ddl.disabled = chkddl.checked ? false : true;
    ddl2.disabled = chkddl.checked ? false : true;
    if (!ddl.disabled) {
    if (!ddl2.disabled) {    
        ddl.focus();
        ddl2.focus();
    }
    }
}