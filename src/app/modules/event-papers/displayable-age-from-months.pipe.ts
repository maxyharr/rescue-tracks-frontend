import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'displayableAgeFromMonths'
})
export class DisplayableAgeFromMonthsPipe implements PipeTransform {
    transform(ageInMonths: number): String {
        debugger;
        ageInMonths = Number(ageInMonths);
        if(ageInMonths < 12) {
            return DisplayableAgeFromMonthsPipe.monthString(ageInMonths);
        } else if (Math.floor(ageInMonths / 12) > 3 || ageInMonths % 12 == 0) {
            return DisplayableAgeFromMonthsPipe.yearString(Math.floor(ageInMonths / 12));
        }

        return `${DisplayableAgeFromMonthsPipe.yearString(Math.floor(ageInMonths / 12))},
                ${DisplayableAgeFromMonthsPipe.monthString(ageInMonths % 12)}`;
    }

    private static yearString(years: number) {
        if(years == 1) {
            return "1 year";
        }
        return `${years} years`;
    }

    private static monthString(months: number) {
        if(months == 1) {
            return "1 month";
        }
        return `${months} months`;
    }
}
