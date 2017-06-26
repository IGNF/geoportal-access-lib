<!DOCTYPE html>
<html>
<head></head>
<body>
  <h1>Liste des exemples</h1>
  <ul>
    <% files.forEach(function(path) {
        var split  = path.split('/');
        var dir    = split.slice(-2)[0];
        var file   = split.slice(-1)[0];
      %>
      <li><a href="<%- path %>"> <%- dir %> -- <%- file %></a></li>
      <% });
    %>
    </ul>
</body>
</html>
