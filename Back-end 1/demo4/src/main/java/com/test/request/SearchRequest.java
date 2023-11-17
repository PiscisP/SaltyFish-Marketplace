package com.test.request;

public class SearchRequest {
    private String query;
    private String filter;

    public void setQuery(String query) {
        this.query = query;
    }

    public void setFilter(String filter) {
        this.filter = filter;
    }

    public String getFilter() {
        return filter;
    }

    public String getQuery() {
        return query;
    }
}
