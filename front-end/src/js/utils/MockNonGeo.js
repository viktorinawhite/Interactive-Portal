//Data without geospatial info (latitude/logitude information)
const dataNonGeo = JSON.parse(`[{
        "ID": "7168958",
        "Time": "1933",
        "Entity": "Person",
        "Name": "Kurnz Henry M.",
        "Occupation": "Clerk",
        "Address": "27 Bridge St., Manhattan, New York, Manhattan, New York, United States",
        "Country/region": "United States",
        "State": "Massachusetts",
        "Gender": "Male"
    },
    {
        "ID": "7168959",
        "Time": "1915",
        "Entity": "Person",
        "Name": "Lux J. B.",
        "Occupation": "Clerk",
        "Address": "4 Union Square, Manhattan, New York, Manhattan, New York",
        "Country/region": "Russia",
        "State": "NULL",
        "Gender": "NULL"
    },
    {
        "ID": "7168960",
        "Time": "1915",
        "Entity": "Person",
        "Name": "McCormick M. J.",
        "Occupation": "Police",
        "Address": "475 4 Ave., Manhattan, New York, Manhattan, New York",
        "Country/region": "Norway",
        "State": "NULL",
        "Gender": "Female"
    },
    {
        "ID": "7168961",
        "Time": "1915",
        "Entity": "Person",
        "Name": "McDonald E. H.",
        "Occupation": "Clerk",
        "Address": "380 W 125 St., Manhattan, New York, Manhattan, New York",
        "Country/region": "United Kingdom",
        "State": "NULL",
        "Gender": "Male"
    },
    {
        "ID": "7168962",
        "Time": "1920",
        "Entity": "Company",
        "Name": "McKinley Square Casino",
        "Occupation": "NULL",
        "Address": "775 E 169 St., Manhattan, New York, Manhattan, New York",
        "Country/region": "Ireland",
        "State": "NULL",
        "Gender": "NULL"
    },
    {
        "ID": "7168963",
        "Time": "1920",
        "Entity": "Company",
        "Name": "Maison Chevalier",
        "Occupation": "NULL",
        "Address": "141 Fulton St., Manhattan, New York, Manhattan, New York",
        "Country/region": "France",
        "State": "NULL",
        "Gender": "NULL"
    },
    {
        "ID": "7168964",
        "Time": "1920",
        "Entity": "Person",
        "Name": "Hammer M.",
        "Occupation": "Laborer",
        "Address": "204 9 Ave., Manhattan, New York, Manhattan, New York",
        "Country/region": "United States",
        "State": "New York",
        "Gender": "Female"
    },
    {
        "ID": "7168965",
        "Time": "1920",
        "Entity": "Company",
        "Name": "Madison Buffet Lunch",
        "Occupation": "NULL",
        "Address": "145 Madison Ave., Manhattan, New York, Manhattan, New York",
        "Country/region": "United States",
        "State": "Iowa",
        "Gender": "NULL"
    },
    {
        "ID": "7168966",
        "Time": "1910",
        "Entity": "Person",
        "Name": "Rothman David",
        "Occupation": "Clerk",
        "Address": "195 Bowery St., Manhattan, New York, Manhattan, New York, Manhattan, New York",
        "Country/region": "Hungary",
        "State": "NULL",
        "Gender": "Male"
    },
    {
        "ID": "7168967",
        "Time": "1915",
        "Entity": "Person",
        "Name": "Maggi H.",
        "Occupation": "Laborer",
        "Address": "103 W 38 St., Manhattan, New York, Manhattan, New York",
        "Country/region": "Germany",
        "State": "NULL",
        "Gender": "Female"
    },
    {
        "ID": "7168968",
        "Time": "1910",
        "Entity": "Company",
        "Name": "Rothstein & Davidowitz",
        "Occupation": "NULL",
        "Address": "130 W 36 St., Manhattan, New York, Manhattan, New York",
        "Country/region": "Austria",
        "State": "NULL",
        "Gender": "NULL"
    },
    {
        "ID": "7168969",
        "Time": "1920",
        "Entity": "Company",
        "Name": "Mahnken's Lunch",
        "Occupation": "NULL",
        "Address": "167 William St., Manhattan, New York, Manhattan, New York",
        "Country/region": "United States",
        "State": "Maine",
        "Gender": "NULL"
    },
    {
        "ID": "7168970",
        "Time": "1915",
        "Entity": "Company",
        "Name": "Heller & Heller",
        "Occupation": "NULL",
        "Address": "528 7 Ave., Manhattan, New York, Manhattan, New York",
        "Country/region": "Austria",
        "State": "NULL",
        "Gender": "NULL"
    },
    {
        "ID": "7168971",
        "Time": "1920",
        "Entity": "Person",
        "Name": "Maloney J. J.",
        "Occupation": "Porter",
        "Address": "791 7 Ave., Manhattan, New York, Manhattan, New York",
        "Country/region": "United Kingdom",
        "State": "NULL",
        "Gender": "Male"
    },
    {
        "ID": "7168972",
        "Time": "1920",
        "Entity": "Person",
        "Name": "Mandl J.",
        "Occupation": "Laborer",
        "Address": "31 W 26 St., Manhattan, New York, Manhattan, New York",
        "Country/region": "Hungary",
        "State": "NULL",
        "Gender": "Female"
    },
    {
        "ID": "7168973",
        "Time": "1910",
        "Entity": "Person",
        "Name": "Rozumkiewicz Michael",
        "Occupation": "Waiter",
        "Address": "1st Avenue, Manhattan, New York, Manhattan, New York",
        "Country/region": "Greece",
        "State": "NULL",
        "Gender": "Male"
    },
    {
        "ID": "7168974",
        "Time": "1905",
        "Entity": "Company",
        "Name": "Hip Chong Low",
        "Occupation": "NULL",
        "Address": "203 W. 38 St., Manhattan, New York, Manhattan, New York",
        "Country/region": "China",
        "State": "NULL",
        "Gender": "NULL"
    },
    {
        "ID": "7168975",
        "Time": "1905",
        "Entity": "Person",
        "Name": "Jacovitz Reuben",
        "Occupation": "Clerk",
        "Address": "77 Chrystie St., Manhattan, New York, Manhattan, New York",
        "Country/region": "Romania",
        "State": "NULL",
        "Gender": "Male"
    },
    {
        "ID": "7168976",
        "Time": "1910",
        "Entity": "Person",
        "Name": "Yamada J.",
        "Occupation": "Laborer",
        "Address": "470 8 Ave, Manhattan, New York, Manhattan, New York",
        "Country/region": "Japan",
        "State": "NULL",
        "Gender": "Male"
    },
    {
        "ID": "7168977",
        "Time": "1915",
        "Entity": "Company",
        "Name": "Maros & Terzoglos",
        "Occupation": "NULL",
        "Address": "300 E 23 St., Manhattan, New York, Manhattan, New York",
        "Country/region": "Italy",
        "State": "NULL",
        "Gender": "NULL"
    },
    {
        "ID": "7168978",
        "Time": "1915",
        "Entity": "Person",
        "Name": "Adams Rose R.",
        "Occupation": "Other",
        "Address": "133 W 49 St., Manhattan, New York, Manhattan, New York",
        "Country/region": "United States",
        "State": "Ohio",
        "Gender": "Female"
    },
    {
        "ID": "7168979",
        "Time": "1910",
        "Entity": "Person",
        "Name": "Zilzer Harry",
        "Occupation": "Clerk",
        "Address": "2130 Broadway, Manhattan, New York, Manhattan, New York",
        "Country/region": "United Kingdom",
        "State": "NULL",
        "Gender": "Male"
    },
    {
        "ID": "7168980",
        "Time": "1915",
        "Entity": "Company",
        "Name": "Elsinger Ralph",
        "Occupation": "Clerk",
        "Address": "112 E. 23 St., Manhattan, New York, Manhattan, New York",
        "Country/region": "Canada",
        "State": "Nova Scotia",
        "Gender": "Male"
    },
    {
        "ID": "7168981",
        "Time": "1910",
        "Entity": "Person",
        "Name": "Yan Kin",
        "Occupation": "Clerk",
        "Address": "400 6 Ave, Manhattan, New York, Manhattan, New York",
        "Country/region": "China",
        "State": "NULL",
        "Gender": "Male"
    },
    {
        "ID": "7168982",
        "Time": "1915",
        "Entity": "Company",
        "Name": "Ferdinand & Littwin",
        "Occupation": "NULL",
        "Address": "38 W. 20 St., Manhattan, New York, Manhattan, New York",
        "Country/region": "United States",
        "State": "North Carolina",
        "Gender": "NULL"
    },
    {
        "ID": "7168983",
        "Time": "1915",
        "Entity": "Company",
        "Name": "Gibson Restaurant Co.",
        "Occupation": "NULL",
        "Address": "22 W 17 St., Manhattan, New York, Manhattan, New York",
        "Country/region": "Ireland",
        "State": "NULL",
        "Gender": "NULL"
    },
    {
        "ID": "7168984",
        "Time": "1895",
        "Entity": "Person",
        "Name": "Chacon Jase",
        "Occupation": "Porter",
        "Address": "177 W Broadway, Manhattan, New York, Manhattan, New York",
        "Country/region": "South America",
        "State": "NULL",
        "Gender": "Male"
    },
    {
        "ID": "7168985",
        "Time": "1895",
        "Entity": "Person",
        "Name": "Cohen Abraham",
        "Occupation": "Laborer",
        "Address": "148  Delancey St., Manhattan, New York, Manhattan, New York",
        "Country/region": "Russia",
        "State": "NULL",
        "Gender": "Male"
    },
    {
        "ID": "7168986",
        "Time": "1895",
        "Entity": "Company",
        "Name": "Delisle Brothers",
        "Occupation": "NULL",
        "Address": "557 W Broadway, Manhattan, New York, Manhattan, New York",
        "Country/region": "France",
        "State": "NULL",
        "Gender": "NULL"
    },
    {
        "ID": "7168987",
        "Time": "1925",
        "Entity": "Company",
        "Name": "Kronenberg Inc.",
        "Occupation": "NULL",
        "Address": "3550 Broadway, Manhattan, New York, Manhattan, New York",
        "Country/region": "Denmark",
        "State": "NULL",
        "Gender": "NULL"
    }
]`)

module.exports = {
  dataNonGeo: dataNonGeo,
}
