(function(){
	var app = angular.module('marcMaster', []);
	
	app.controller("SubmissionController", function(){
		this.message = sample;
	});
	
	var sample = {"leader": "01243nam  22002173n 450 ",
  							"fields": [
    												["001","FRBNF323046990000009"],
    												["009","http://catalogue.bnf.fr/ark:/12148/cb32304699p"],
    												["035","  ","a","SAFIG04210003-01"],
    												["039","  ","o","CRI","a","SU063312260001S  "],
    												["100","  ","a","19970701d1927    m  y0frey0103    ba"],
    												["101","0 ","a","eng"],
    												["102","  ","a","GB"],
    												["105","  ","a","||||z   00|||"],
    												["106","  ","a","r"],
    												["200","1 ","a","Greek printing types","b","Texte imprimé","e",", 1465-1927, facsimiles from an exhibition of books illustrating the development of Greek printing shown in the British Museum, 1927. With an historical introduction by Victor Scholderer. [Preface by Frederic G. Kenyon.]"],
    												["210","  ","a","London, British Museum ; B. Quaritch ; H. Milford","a","(Oxford, printed by J. Johnson)","d","1927. Gr. in-fol. (390 x 265), 23 p., fac-sim. [Don 217025] -Ia-"],
    												["300","  ","a","On a joint des comptes rendus extraits du ¸Times Lit. Suppl.¸, 25 August. 1927 et du ¸Library association record¸, 1927, et ¸La première Renaissance des études grecques en France, hellénistes et imprimeurs¸, par Egger, extrait de la ¸Revue de Paris¸, 15 décembre 1868"],
    												["702"," |","3","12331862","a","Kenyon","b","Frederic George","f","1863-1952","4","080"],
    												["801"," 0","a","FR","b","BNF","c","19970701","g","AFNOR","2","intermrc"]
													]};
})();