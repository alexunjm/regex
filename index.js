const DEFAULT_PATTERN_WORD = 'TEXTO'
const DEFAULT_PATTERN_CLASS = '[aeiou0-9]'

function literal(pattern, str) {
	pattern = pattern ? pattern : DEFAULT_PATTERN_WORD
	const p = new RegExp(pattern);
	console.log(`"${str}" tiene la palabra ${pattern}`)
	console.log(p.test(str))
}

function inicia_con(pattern, str) {
	pattern = pattern ? pattern : DEFAULT_PATTERN_WORD
	const p = new RegExp('^' + pattern);
	console.log(`"${str}" inicia con la palabra ${pattern}`)
	console.log(p.test(str))
}

function termina_con(pattern, str) {
	pattern = pattern ? pattern : DEFAULT_PATTERN_WORD
	const p = new RegExp(pattern + '$');
	console.log(`"${str}" termina con la palabra ${pattern}`)
	console.log(p.test(str))
}

function inicia_con_clase(pattern, str) {
	pattern = pattern ? pattern : DEFAULT_PATTERN_CLASS
	const p = new RegExp('^' + pattern);
	console.log(`"${str}" inicia con la clase ${pattern}`)
	console.log(p.test(str))
}

function no_inicia_con_clase(pattern, str) {
	pattern = pattern ? pattern.map(ptrn => {return '[^' + ptrn + ']'}).join('') : DEFAULT_PATTERN_CLASS
	const p = new RegExp('^' + pattern);
	console.log(`"${str}" no inicia con la clase ${pattern}`)
	console.log(p.test(str))
}

function cumple_patron(pattern, nombre_archivo) {
	const p = new RegExp(pattern);
	console.log(`"${nombre_archivo}" cumple la expresión regular ${pattern}`)
	console.log(p.test(nombre_archivo))
}

function rebanar(pattern, src) {
	pattern = pattern ? pattern : '\\,'
	const p = new RegExp(pattern);
	console.log(`"${src}" rebanando por cada ${pattern}`)
	console.log(src.split(p))
}

literal(null, 'cumple patron de TEXTO o NO')
inicia_con(null, 'cumple patron de TEXTO o NO')
inicia_con('cumple', 'cumple patron de TEXTO o NO')
termina_con(null, 'cumple patron de TEXTO o NO')
termina_con('NO', 'cumple patron de TEXTO o NO')
inicia_con_clase(null, 'cumple patron de TEXTO o NO')
inicia_con_clase('[abc]', 'cumple patron de TEXTO o NO')
no_inicia_con_clase(null, 'cumple patron de TEXTO o NO')
no_inicia_con_clase(['ab', 'A-Z'], 'cumple patron de TEXTO o NO')
termina_con('\\.', 'cumple patron de TEXTO o NO')
termina_con('\\.', 'cumple patron de TEXTO o NO.')
cumple_patron('^\\d+\\.jpe?g$', 'cualquierarchivo.jpeg')
cumple_patron('^\\d+\\.jpe?g$', '9845.jpeg')
cumple_patron('^\\d+\\.jpe?g$', '9845.jpg')
rebanar('\\s*,\\s*', 'este metodo es capaz de rebanar un string, por medio de una regex dada')
rebanar('\\s+', `este metodo es cap
az de rebanar ,
un string, por medio 
de una regex dada`)