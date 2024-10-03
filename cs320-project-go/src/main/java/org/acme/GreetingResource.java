package org.acme;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;


@Path("/hello")
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

    @Path("/personalized")

    @POST
    @Produces(MediaType.TEXT_PLAIN)
    public String personalizedHelloPost(Person p) {
        return "Hello " + p.getFirst() + " " + p.getLast();
    }

    public static class Person {
        private String first;
        private String last;

        public String getFirst() { return first; }
        public void setFirstName(String first) { this.first = first; }
        public String getLast() { return last; }
        public void setLastName(String last) { this.last = last; }
}

}
