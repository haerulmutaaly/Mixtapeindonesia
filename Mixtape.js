var postTitle=new Array();var postUrl=new Array();var postMp3=new Array();var postDate=new Array();var postLabels=new Array();var postBaru=new Array();var tocLoaded=false;var numChars=250;var postFilter="";var numberfeed=0;function loadtoc(a){function b(){if("entry" in a.feed){var d=a.feed.entry.length;numberfeed=d;ii=0;for(var h=0;h<d;h++){var n=a.feed.entry[h];var e=n.title.$t;var m=n.published.$t.substring(0,10);var j;for(var g=0;g<n.link.length;g++){if(n.link[g].rel=="alternate"){j=n.link[g].href;break}}var o="";for(var g=0;g<n.link.length;g++){if(n.link[g].rel=="enclosure"){o=n.link[g].href;break}}var c="";if("category" in n){for(var g=0;g<n.category.length;g++){c=n.category[g].term;var f=c.lastIndexOf(";");if(f!=-1){c=c.substring(0,f)}postLabels[ii]=c;postTitle[ii]=e;postDate[ii]=m;postUrl[ii]=j;postMp3[ii]=o;if(h<10){postBaru[ii]=true}else{postBaru[ii]=false}ii=ii+1}}}}}b();tocLoaded=true;displayToc2();document.write('</br></a>')}function filterPosts(a){scroll(0,0);postFilter=a;displayToc(postFilter)}function allPosts(){var f=postUrl[e];postUrl[e]=postUrl[g];postUrl[g]=f;var f=postLabels[e];postLabels[e]=postLabels[g];postLabels[g]=f;h+="<tr>";h+='<td class="toc-header-col1">';h+='<a href="javascript:toggleTitleSort();" title="'+m+'">'+e+"</a>";h+="</td>";h+='<td class="toc-header-col2">';h+='<a href="javascript:toggleDateSort();" title="'+k+'">'+d+"</a>";h+="</td>";h+='<td class="toc-header-col3">';h+='<a href="javascript:allPosts();" title="'+j+'">'+c+"</a>";h+="</td>";h+='<td class="toc-header-col4">';h+="Download MP3";h+="</td>";h+="</tr>";for(var g=0;g<postTitle.length;g++){if(a==""){h+='<tr><td class="toc-entry-col1"><a href="'+postUrl[g]+'">'+postTitle[g]+'</a></td><td class="toc-entry-col2">'+postDate[g]+'</td><td class="toc-entry-col3">'+postLabels[g]+'</td><td class="toc-entry-col4"><a href="'+postMp3[g]+'">Download</a></td></tr>';l++}else{z=postLabels[g].lastIndexOf(a);if(z!=-1){h+='<tr><td class="toc-entry-col1"><a href="'+postUrl[g]+'">'+postTitle[g]+'</a></td><td class="toc-entry-col2">'+postDate[g]+'</td><td class="toc-entry-col3">'+postLabels[g]+'</td><td class="toc-entry-col4"><a href="'+postMp3[g]+'">Download</a></td></tr>';l++}}}h+="</table>";if(l==postTitle.length){var f='<span class="toc-note">Menampilkan Semua '+postTitle.length+" Artikel<br/></span>"}else{var f='<span class="toc-note">Menampilkan '+l+" artikel dengan kategori '";f+=postFilter+"' dari "+postTitle.length+" Total Artikel<br/></span>"}var b=document.getElementById("toc");b.innerHTML=f+h}function displayToc2(){var a=0;var b=0;while(b<postTitle.length){temp1=postLabels[b];document.write("<p/>");document.write('<center><h2><a href="/search/label/'+temp1+'">'+temp1+"</a></h2></center></postTitle.length){temp1=postLabels[b];document.write("<p><ol>");firsti=a;do{document.write("<li>");document.write('<a href="'+postUrl[a]+'">'+postTitle[a]+"</a>");if(postBaru[a]==true){document.write(' - <strong><em><span style="color: rgb(255, 0, 0);">New !!</span> </em></strong>')}document.write("</li>");a=a+1}while(postLabels[a]==temp1);b=a;document.write("</ol>");sortPosts2(firsti,a);if(b>postTitle.length){break}}}function toggleTitleSort(){if(tocLoaded){displayToc(postFilter);var a=document.getElementById("toclink")}else{alert("Just wait... TOC is loading")}}function hideToc(){var a=document.getElementById("toc");a.innerHTML="";var b=document.getElementById("toclink");b.innerHTML='<a href="#" onclick="scroll(0,0); showToc(); Effect.toggle(\'toc-result\',\'blind\');">?? Menampilkan Daftar Isi</a> <img src="http://radiorodja.googlepages.com/new_1.gif"/>'}function looptemp2(){for(var a=0;a<numberfeed;a++){document.write("<br>");document.write('Post Link     : <a href="'+postUrl[a]+'">'+postTitle[a]+"</a><br>");document.write('Download mp3  : <a href="'+postMp3[a]+'">'+postTitle[a]+"</a><br>");document.write("<br>")}};
