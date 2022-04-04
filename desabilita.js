function Enableddl(chkddl) {
    var ddl = document.getElementById("DDL");
    ddl.disabled = chkddl.checked ? false : true;
    if (!ddl.disabled) {
        ddl.focus();
    }
}