#Next
Simple helper javascript object that provides the 'next' item in the array. Starting over after returning the last item in the array.

Can return strings, numbers, and objects.

##Usage

###Strings
<pre>
var beatles = new Next( "John Paul George Ringo".split(" ") );

beatles.next(); //John
beatles.next(); //Paul
beatles.next(); //George
beatles.next(); //Ringo
beatles.next(); //John
</pre>

###Numbers
<pre>
var num = new Next([1, 3, 6, 11]);

num.next(); //1
num.next(); //3
num.next(); //6
num.next(); //11
num.next(); //1
</pre>

###Objects
<pre>
var obj = new Next([
		{firstName : "Dave", lastName : "Matthews"},
		{firstName : "John", lastName : "Mayer"},
		{firstName : "Gordon", lastName : "Sumner" }
	]);

var item;

for(var i = 0; i &lt; 3; i = i + 1){
	item = obj.next();
	return item.firstName + " " + item.lastName;
}

//Dave Matthews
//John Mayer
//Gordon Sumner

</pre>