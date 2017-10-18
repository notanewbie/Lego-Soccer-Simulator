updating = false;
function generateHeadline(input) {
result = '<team1 id="active">' + input[0] + " <score1 id='active'>" + input[1] + '</score1></team1> <team2 id="active">' + input[3] + " <score1 id='active'>" + input[4] + "</score2></team2><desc id='active'>" + input[6] + "</desc>";
return result
}
function notUpdating() {
updating = false;
}
function breaking(MSG) {
msg = MSG
updating = true;
}
//subjects = ["Scores", "Linux", "Paytons", "FS1", "Kiefer", "Camping", "Breaking"]
//subjectHeadlines = [[generateHeadline(["Tribe","0","red","Inter","9","light-blue","Final"])],["We have a Linux desktop."], ["The Paytons are fighting, arguing and bickering. Basically, living together in harmony.","I'm hungry. It's time to eat."],["Fox Sports 1 aired First Things First at 4 PM."], ["Jack. Is. Back.", "I mean, Kiefer. Is. Back."], ["We went camping. It was fun."],["Nothing."]]
//subjectObjects = [["score"],["short"], ["scroller","short"],["short"], ["short", "short"], ["short"],["short"]]
x = 0;
s = 0;
function replaceNode(thisOne, theParent) {
newnode = thisOne.cloneNode(true);
theParent.replaceChild(newnode, thisOne);
}
function hide() {
scroller.id="hidden"
setTimeout(show, 50)
}
function show() {
if(subjectObjects[s][a] == "scroller") {
scroller.id="active"
}
if(subjectObjects[s][a] == "short") {
scroller.id="short"
}
if(subjectObjects[s][a] == "bump-short") {
scroller.id="bump-short"
}
if(subjectObjects[s][a] == "bump") {
scroller.id="bump"
}
if(subjectObjects[s][a] == "score") {
scroller.id="peek"
}
}
function nextItem() {
if(updating == false) {
ticker.id = "";
//console.log(x)
//console.log(headlines[x])
a = x
setTimeout(hide, 50)
if(subjectHeadlines[s][x]) {
x = x;
console.log ("x = x")
}
else if(x < 0){
x = 0
console.log ("x = " + x)
subject.id="active"
subject2.id="hidden"
subject3.id="hidden"
subject4.id="hidden"
subject5.id="hidden"
subject6.id="hidden"
subject7.id="hidden"
if(subjects[s + 1]) {
s = s + 1
}
else {
s = 0
}
}
else if(x == x){
x = -1
scroller.id="hidden"
subject.id="show"
subject2.id="show2"
subject3.id="show3"
subject4.id="show4"
subject5.id="show5"
subject6.id="show6"
subject7.id="show7"
bump.id="hidden"
console.log ("x = " + x)
}
a = x
if(subjectObjects[s][x] == "bump-short") {
document.title = subjectHeadlines[s][x][2]
}
else {
document.title = subjectHeadlines[s][x]
}
if(subjectObjects[s][x] == "scroller") {
console.log(objects[x])
scroller.id="active"
console.log(subjectHeadlines[s][x])
scroller.innerHTML = subjectHeadlines[s][x]
x = x + 1;
}
else if(subjectObjects[s][x] == "short") {
scroller.id="short"
scroller.innerHTML = subjectHeadlines[s][x]
x = x + 1;
}
else if(subjectObjects[s][x] == "bump-short") {
console.log(headlines[x])
//bump.id="active"
//bump.innerHTML = headlines[x][0]
//bump.style.backgroundColor = headlines[x][1]
scroller.id="short"
scroller.innerHTML = '<bump id="shown" style="background-color:' + subjectHeadlines[s][x][1] + ';">' + subjectHeadlines[s][x][0] + '</bump> ' + subjectHeadlines[s][x][2];
x = x + 1;
}
else if(subjectObjects[s][x] == "score") {
console.log(headlines[x])
//bump.id="active"
//bump.innerHTML = headlines[x][0]
//bump.style.backgroundColor = headlines[x][1]
scroller.id="peek"
scroller.innerHTML = subjectHeadlines[s][x];
x = x + 1;
}
if(s == 0) {
subject.innerHTML=subjects[0]
subject2.innerHTML=subjects[1]
subject3.innerHTML=subjects[2]
subject4.innerHTML=subjects[3]
subject5.innerHTML=subjects[4]
subject6.innerHTML=subjects[5]
subject7.innerHTML=subjects[6]
}
if(s == 1) {
subject.innerHTML=subjects[1]
subject2.innerHTML=subjects[2]
subject3.innerHTML=subjects[3]
subject4.innerHTML=subjects[4]
subject5.innerHTML=subjects[5]
subject6.innerHTML=subjects[6]
subject7.innerHTML=subjects[0]
}
if(s == 2) {
subject.innerHTML=subjects[2]
subject2.innerHTML=subjects[3]
subject3.innerHTML=subjects[4]
subject4.innerHTML=subjects[5]
subject5.innerHTML=subjects[6]
subject6.innerHTML=subjects[0]
subject7.innerHTML=subjects[1]
}
if(s == 3) {
subject.innerHTML=subjects[3]
subject2.innerHTML=subjects[4]
subject3.innerHTML=subjects[5]
subject4.innerHTML=subjects[6]
subject5.innerHTML=subjects[0]
subject6.innerHTML=subjects[1]
subject7.innerHTML=subjects[2]
}
if(s == 4) {
subject.innerHTML=subjects[4]
subject2.innerHTML=subjects[5]
subject3.innerHTML=subjects[6]
subject4.innerHTML=subjects[0]
subject5.innerHTML=subjects[1]
subject6.innerHTML=subjects[2]
subject7.innerHTML=subjects[3]
}
if(s == 5) {
subject.innerHTML=subjects[5]
subject2.innerHTML=subjects[6]
subject3.innerHTML=subjects[0]
subject4.innerHTML=subjects[1]
subject5.innerHTML=subjects[2]
subject6.innerHTML=subjects[3]
subject7.innerHTML=subjects[4]
}
if(s == 6) {
subject.innerHTML=subjects[6]
subject2.innerHTML=subjects[0]
subject3.innerHTML=subjects[1]
subject4.innerHTML=subjects[2]
subject5.innerHTML=subjects[3]
subject6.innerHTML=subjects[4]
subject7.innerHTML=subjects[5]
}
}
else {
scroller.id = "breaking"
scroller.innerHTML = msg + " " + msg + " " + msg + " " + msg
subject.innerHTML = "Breaking"
ticker.id = "breaking"
updating = false;
}
}
function getTag(thisThing, num) {
return document.getElementsByTagName(thisThing)[num]
}
function start() {
ticker = getTag("ticker", 0)
scroller = getTag("scroller", 0)
scroller.id="active"
subject = getTag("subject", 0)
subject.id="active"
subject2 = getTag("subject", 1)
subject2.id="hidden"
subject3 = getTag("subject", 2)
subject3.id="hidden"
subject4 = getTag("subject", 3)
subject4.id="hidden"
subject5 = getTag("subject", 4)
subject5.id="hidden"
subject6 = getTag("subject", 5)
subject6.id="hidden"
subject7 = getTag("subject", 6)
subject7.id="hidden"
lowbug = getTag("lowbug", 0)
lowbug.id="active"
bottomBar = getTag("bottom_bar", 0)
bottomBar.id="active"
bump = getTag("bump", 0)
bump.id="hidden"
leftbug = getTag("left_bug", 0)
leftbug.id="active"
nextItem()
}
setTimeout(start, 100)
function init() {
setInterval(nextItem, 25000)
}