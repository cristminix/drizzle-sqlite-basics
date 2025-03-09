import {cities,countries} from "@/global/schema";
import {db} from "@/global/lib/db";
import {eq} from "drizzle-orm";

const main = async () => {

    const ls = await db
        .select()
        .from(countries)
        .leftJoin(cities, eq(cities.countryId, countries.id))
        .where(eq(countries.id, 10))
    console.info(ls)
}

main()
