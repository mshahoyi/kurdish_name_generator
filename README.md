# Kurdish Name Generator

This is an ultra simple library to generate two part Kurdish names.

## Docs

-   `generateNameInLatin: (withRandomNumber: boolean = true) => string`
    This function generates a name in latin, optionally with a random number appended to the end of the name.

-   TODO: `generateNameInAramaic: (withRandomNumber: boolean = true) => string`
    This function generates a name in aramaic character set. This function also accepts an option to append a 4 digit random code to the name end.

## Name Generation

This library generates two part names joined in this format `{first_part}i-{second_part}`. It randomly selects the names from each of the following sets;

-   `first_part`: "kisal", "kak", "dlbar".
-   `second_part`: "pasha", "hama", "mar", "asn".

examples

-   kisali-pasha-{optional 4 digit random number here}
-   dlbari-mar-{optional 4 digit random number here}

This list can and should grow in the future to allow more combinations.

## Contribute

We are more than happy to see you contribute! We appreciate any contribution in any way.

## Authors

Mohammed Shahoe <muyabb@gmail.com>
