$(document).ready(function() {

    $("xuxu").val("");

    $("#btn").click(function(e){
        e.preventDefault();
        insertTweet($("#xuxu").val());
        $("#xuxu").val("");
        resetarNumero();
    });
 
    function insertTweet(tweet){
        $(".tuites").prepend(`
        <div class="px-2 border border-dark" style="background-color:gray;">
            <p class="text-white">${tweet}</p>
            <span id="span-date" class="small text-white">${appendDateToTweet()}</span>
        </div>
    `)};

    function appendDateToTweet(){
        return formatDate(new Date());    
    };

    function formatDate(date) {
        const monthNames = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out","nov", "dez"];
        let day = date.getDate();
        let monthIndex = date.getMonth();
        let year = date.getFullYear();
        return `${day} de ${monthNames[monthIndex]} de ${year}`;
    }

    function pegaNumeroCaracteres(){
        let caractereSobrando = 280 - $("#xuxu").val().length;
        return $("#contador").text(`Você ainda tem ${caractereSobrando} caracteres.`);
    }

 $("#xuxu").keyup(function(){
    pegaNumeroCaracteres();
 })

})