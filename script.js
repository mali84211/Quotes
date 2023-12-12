var Quotes=[
    {'author': '― Oscar Wilde', 
    'quote': '“Be yourself; everyone else is already taken.”'
   },
    {'author': '― Albert Einstein ', 
    'quote': '“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”'
   },
    {'author': '― Frank Zappa', 
    'quote': '“So many books, so little time.” '
   },
    {'author': '― Marcus Tullius Cicero ', 
    'quote': '“A room without books is like a body without a soul.” '
   },
    {'author': '― Mahatma Gandhi ', 
    'quote': '“Be the change that you wish to see in the world.” '
   },
    {'author': '― Elbert Hubbard ', 
    'quote': '“A friend is someone who knows all about you and still loves you.” '
   },
    {'author': '― Stephen Chbosky, The Perks of Being a Wallflower ', 
    'quote': '“We accept the love we think we deserve.” '
   },
    {'author': '― Friedrich Nietzsche, Twilight of the Idols ', 
    'quote': '“Without music, life would be a mistake.” '
   },
    {'author': '― Andre Gide, Autumn Leaves ', 
    'quote': '“It is better to be hated for what you are than to be loved for what you are not.” '
   },
    {'author': '― Robert A. Heinlein, Stranger in a Strange Land ', 
    'quote': '“Love is that condition in which the happiness of another person is essential to your own.”'
   },

]
function generateQuote(){
    var x= Math.round(Math.random()* Quotes.length+1)
    document.getElementById('quoteOutput').innerHTML=Quotes[x].quote
    document.getElementById('authorOutput').innerHTML=Quotes[x].author
}