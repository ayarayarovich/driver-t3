import { api, HydrateClient } from "@/trpc/server";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Divider } from "@nextui-org/react";
import SignIn from "./_components/signin";

export default async function Home() {
  const allTrucks = await api.trucks.allTrucks();

  return (
    <HydrateClient>
      <main>
        <Navbar isBordered>
          <NavbarBrand>
            <img src="/driver-logo.svg" className="h-12" alt="" />
          </NavbarBrand>
          <NavbarContent justify="end">
            <NavbarItem>
              <SignIn />
            </NavbarItem>
          </NavbarContent>
        </Navbar>

        <div className="container mx-auto flex justify-center px-4 py-16">
          <div>
            <h1 className="mb-8 text-[10rem] leading-[0.8]">
              <span className="font-anta">DRIVER</span>
              <br />
              <span className="text-[0.8em]">App</span>
            </h1>
            <p className="text-foreground-500 max-w-sm">
              At Driver, we are committed to providing reliable, efficient, and
              cost-effective cargo transportation solutions. Whether you are
              moving goods locally or across the country, our fleet of modern
              vehicles and experienced team ensure your shipments arrive safely
              and on time — every time.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <h1 className="mb-8 text-center text-3xl font-medium">Our trucks</h1>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allTrucks.map((v) => (
              <Card key={v.id}>
                <CardHeader className="justify-center text-xl font-medium">
                  {[v.make, v.model].filter(Boolean).join(" ")}
                </CardHeader>
                <Divider />
                <CardBody className="p-8">
                  <img
                    className="h-32"
                    src={
                      v.type
                        ? (
                            {
                              Curtainsider: "/curtainsider.svg",
                              Box: "/box.svg",
                              Refrigerated: "/refrigirator.svg",
                              Flatbed: "/flatbed.svg",
                            } satisfies Record<typeof v.type, string>
                          )[v.type]
                        : undefined
                    }
                    alt=""
                  />
                </CardBody>
                <Divider />
                <CardFooter className="flex flex-col items-stretch gap-2">
                  <div className="flex items-end justify-between gap-2">
                    <div>Min weight</div>
                    <div>{v.minWeight} kg</div>
                  </div>
                  <div className="flex items-end justify-between gap-2">
                    <div>Max weight</div>
                    <div>{v.maxWeight} kg</div>
                  </div>
                  <div className="flex items-end justify-between gap-2">
                    <div>Type</div>
                    <div>{v.type}</div>
                  </div>
                  <div className="flex items-end justify-between gap-2">
                    <div>Man. year</div>
                    <div>{v.year}</div>
                  </div>
                  <div className="flex items-end justify-between gap-2">
                    <div>Mileage</div>
                    <div>{v.mileage} km</div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <h1 className="mb-8 text-center text-3xl font-medium">
            Calculate price
          </h1>
        </div>
      </main>
    </HydrateClient>
  );
}
