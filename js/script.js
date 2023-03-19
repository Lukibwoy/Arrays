// ARRAYS

// Zad 2

// Mając do dyspozycji poniższą listę imion:

let names = ['Jan', 'Grzegorz', 'Krzysztof', 'Maciej', 'Maria', 'Izabela', 'Magdalena', 'Kinga', 'Kacper']

// //, odwołaj się kolejno do:
// pierwszego,
console.log(names[0])

// ostatniego,
console.log(names[names.length - 1])

// przedostatniego,
console.log(names[names.length - 2])
// środkowego

let MiddleName = Math.floor(names.length / 2)
let newName = names[MiddleName]
console.log(newName)

// elementu.

// Następnie dodaj na koniec takiej listy dwa nowe imiona, a na początek jedno. Ponów operacje. Czy otrzymałeś różne wyniki niż poprzednio? Jak zaprogramować ww. funkcjonalność tak, aby była niezależna od ilości elementów w liście.

names.push('Jarek', 'Marek')
names.unshift('Darek')
console.log(names)

names.push('Jarek', 'Marek')
names.unshift('Darek')
console.log(names)

// Zad 3.
// Aby przećwiczyć możliwe do wywołania metody na tablicy, wykonaj poniższe kroki (realizację każdego z zestawów umieść w oddzielnych funkcjach):

// Zestaw I

// Stwórz pustą tablicę
let random = []

// Dodaj do niej 5 nowych elementów
random.push('1', '2', '3', '4', '5')
console.log(random)
// Odczytaj długość takiej tablicy
console.log(random.length)
// Umieść nowy element na początku tablicy
random.unshift('0')
console.log(random)
// Odczytaj pierwszy, środkowy oraz ostatni element na takiej liście
console.log(random[0])

console.log(random)
let middle = Math.floor(random.length / 2)
console.log(middle)
let newRandom = random[middle]
console.log(newRandom)

console.log(random[random.length - 1])

// Zestaw II
// Zadeklaruj pustą tablicę i umieść w niej 5 dowolnych nazw firm IT, które poda użytkownik. Użyj pętli.

let companies = []
let companiesToPush = ['GoCode', 'Devs-Mentoring.pl', 'Google', 'RandomCode', 'WwwIt']
companiesToPush.forEach(item => {
	companies.push(item)
})
console.log(companies)

// Wyświetl tylko te firmy, które nie mają w nazwie litery ‘o’

let filteredCompanies = companies.filter(item => !item.includes('o'))
console.log(filteredCompanies)

// Sprawdź czy użytkownik podał firmę o nazwie “Devs-Mentoring.pl”. Na podstawie tego wyświetl odpowiedni komunikat.

if (companies.includes('Devs-Mentoring.pl')) {
	alert('We got it')
}

// Usuń drugą nazwę firmy z listy
let item = 1
companies.splice(item, 1)
console.log(companies)

// Wyświetl tylko te nazwy, których długość przekracza 8 znaków

let longerItems = companies.filter(item => item.length > 8)
console.log(longerItems)

// Skopiuj tablicę do companies_copy

let companies_copy = companies.slice()
console.log(companies_copy)

// Odwróć oryginalną listę, korzystając z funkcji reverse()

companies.reverse()
console.log(companies)

// Zestaw III
// Stwórz listę 10-ciu dowolnie wygenerowanych kodów o długości 5 lub 6 (długość ma być losowana)
// Wyświetl tylko te wyrazy, których długość jest parzysta

// funkcja generująca losowy kod o zadanej długości

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Zad 4.
// Mając do dyspozycji poniższą tablicę:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Posortuj listę i znajdź wartość minimalną oraz maksymalną
ages.sort()
console.log(ages)
let minAge = ages[0]
let maxAge = ages[ages.length - 1]

console.log(minAge)
console.log(maxAge)

// Oblicz średnią wieku

var sum = 0
let pieces = ages.length
for (let i of ages) {
	sum += i
}
console.log(sum / pieces)

// Oblicz przedział wieków (różnica między max a min)

let difference = ages[ages.length - 1] - ages[0]
console.log(difference)

