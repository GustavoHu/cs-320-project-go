package org.acme;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("/personalized/{name}")
public class GreetingResource {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "Hello RESTEasy";
    }

    @Path("/personalized/{name}")
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String personalizedHello(@PathParam("name") String name) {
        return "Hello " + name;
    }
}
