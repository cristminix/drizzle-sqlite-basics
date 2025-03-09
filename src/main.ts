import {cities,countries} from "@/global/schema";
import {db} from "@/global/lib";
import {eq} from "drizzle-orm";

const main = async () => {

    const records = await db
        .select({city:cities.name,country:countries.name})
        .from(countries)
        .rightJoin(cities, eq(cities.countryId, countries.id))
        .where(eq(countries.id, 10))
    console.info(records)
}

main()
