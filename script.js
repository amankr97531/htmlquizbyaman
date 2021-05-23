const quizDB = [
		 {
		 question:"Q1: What is the full form of html?",
		 a: "Hyper text mark language",
		 b: "Hyper text manage language",
		 c: "Hypertext markup language",
		 d: "Higher text markup language",
		 ans: "ans3"
	     },
		 {
		 question:"Q2: What should be the first tag in any HTML document?",
         a: "<head>",
         b: "<title>",
         c: "<html>",
         d: "<document>",
		 ans: "ans3"
		 },
		 {
		 question:"Q3: How can you make a numbered list?",
         a: "<dl>",
         b: "<ol>",
         c: "<list>",
         d: "<ul>",
		 ans: "ans2"
		 },
		 {
		 question:"Q4: Choose the correct HTML tag to make a text italic?",
         a: "<ii>",
         b: "<italics>",
         c: "<italic>",
         d: "<i>",
		 ans: "ans4"
		 },
		 {
		question:"Q5: Choose the correct HTML tag to make a text bold?",
         a: "<b>",
         b: " <bold>",
         c: " <bb>",
         d: " <bld>",
		 ans: "ans1"
		 },
		 {
		 question:"Q6:What is the correct HTML for adding a background color?",
         a:" <body color=”yellow”>",
         b:" <body bgcolor=”yellow”>",
         c:" <background>yellow</background>",
         d:" <body background=”yellow”>",
		 ans: "ans2"
		 },
		 {
		question:"Q7: In HTML document the tags?",
        a:" Should be written in upper case",
        b:"should be written in lower case",
        c:" should be written in propercase",
        d:"can be written in both uppercase or lowercase",
		ans: "ans4"
		 },
		 {
          question:"Q8:HTML supports",
         a:" ordered lists",
         b:" unordered lists",
         c:" both type of lists",
         d:" does not support those types",
		 ans: "ans3"
		 },
		 {
		 question:"Q9: What is the correct HTML tag for inserting a line break?",
         a:" <br>",
         b:" <lb>",
         c:" <break>",
         d:" <newline>",
		 ans: "ans1"
		 },
		 {
		 question:"Q10:Some tags enclose the text. Those tags are known as?",
         a:" Couple tags",
         b:" Single tags",
         c:" Double tags",
         d:" Pair tags ",
		 ans: "ans4"
		 },
		 {
		 question:"Q11:Which of the following is an attribute of <Table> tag?",
         a:" src",
         b:" link",
         c:" cellpadding",
         d:" bold ",
		 ans: "ans3"
		 },
		 {
		 question:"Q12:Choose the correct HTML tag for the largest heading?",
         a:" <H1>",
         b:" <H6>",
         c:" <H10>",
         d:" <H15>", 
		 ans: "ans1"
		 },
		 {
		 question:"Q13: Awebpage displays a picture. What tag was used to display that picture?",
         a:" picture",
         b:" image",
         c:" img",
         d:" src",
		 ans: "ans3"
		 },
		 {
		 question:"Q14:Which attribute you’ll use with TD tag to merge two cells horizontally?",
         a:" merge=colspan2",
         b:" rowspan=2",
         c:" colspan=2",
         d:" merge=row2 ",
		 ans: "ans3"
		 },
		 {
		 question:"Q15: There are ____ different of heading tags in HTML?",
         a:" 4",
         b:" 5",
         c:" 6",
         d:" 7",
		 ans: "ans3"
		 },
		 {
		 question:"Q16:Marquee is a tag in HTML to?",
         a:" mark the list of items to maintaininqueue",
         b:" Mark the text so that it is hidden in browser",
         c:" Display text with scrolling effect",
         d:" None of above ",
		 ans: "ans3"
		 },
		 {
		 question:"Q17:Which of the following tag is used to add rows in the table?",
         a:"<td> and </td>",
         b:"<th> and </th>",
         c:"<tr> and </tr>",
         d:"None of the above",
		 ans: "ans3"
		 },
		 {
		 question:"Q18:Which of the following HTML tag is the special formatting tag?",
         a:"<p>",
         b:"<b>",
         c:"<pre>",
         d:"None of the above",
         ans: "ans3" 
		 },
		 {
		 question:"Q19:The special formatting codes in HTML document used to present contentare?",
         a:" tags",
         b:" attributes",
         c:" values",
         d:" None of above",
		 ans: "ans1" 
         },
		 {
		 question:"Q20:HTML documents are saved in?",
         a:" Special binary format",
         b:" Machine language codes",
         c:" ASCII text",
         d:" None of above",
		 ans: "ans3" 
		 }
		 ];
		 
		 const question = document.querySelector('.question');
		 const option1 = document.querySelector('#option1');
		 const option2 = document.querySelector('#option2');
		 const option3 = document.querySelector('#option3');
		 const option4 = document.querySelector('#option4');
		 const submit = document.querySelector('#submit');
		 
		 const answers = document.querySelectorAll('.answer');
		 
		 const showScore = document.querySelector('#showScore');
		 
		 
		 let questionCount = 0;
		 let score = 0;
		 
		 const loadQuestion = () => {
			 
		 const questionList = quizDB[questionCount];
		 
			 question.innerText = questionList.question;
			 
			 option1.innerText = questionList.a;
			 option2.innerText = questionList.b;
			 option3.innerText = questionList.c;
			 option4.innerText = questionList.d;
		 }
		 
		 loadQuestion();
		 
		 const getCheckAnswer = () => {
			let answer;
			
			answers.forEach((curAnsElem) => {
		    if(curAnsElem.checked){
				answer= curAnsElem.id;
			}
		});
		
		return answer;
	 };
	 
	 
	 const deselectAll = () => {
		 answers.forEach((curAnsElem) => curAnsElem.checked = false);
	 }
	 
		 submit.addEventListener('click', () => {
			const checkedAnswer = getCheckAnswer(); 
			console.log(checkedAnswer);
			
			if(checkedAnswer== quizDB[questionCount].ans){
				score++;
			};
		
		     questionCount++;
			 
			 deselectAll();
			if(questionCount < quizDB.length){
				loadQuestion();
			}
			else{
				
				showScore.innerHTML = `
				<h3> Your scored ${score}/${quizDB.length}👍 </h3>
				<button class="btn" onclick="location.reload()"> Play Again</button>
				`;
				
				showScore.classList.remove('scoreArea');
			}
			
		 });