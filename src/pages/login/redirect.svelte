<script>
const url = Astro.request.url;
const params = new URL(url).searchParams;
const code = params.get("code") || "No code";
</script>


<p class="text-center">Redirecting...</p>
<p class="text-center">Your code is {code}</p>
<!--

<p>This is your data.</p>
  <ul>
    <li>Username:{userData.global_name}</li>
    <li>UserID:{userData.username}</li>
    <li>Email:{userData.email}</li>
    <li>
      Avatar:<img
        src={"https://cdn.discordapp.com/avatars/" +
          userData.id +
          "/" +
          userData.avatar}
        alt="avatar"
      />
    </li>
    <li>
      Banner:<img
        src={"https://cdn.discordapp.com/banners/" +
          userData.id +
          "/" +
          userData.banner}
        alt="banner"
      />
    </li>
    <li>SnowflakeID:{userData.id}</li>
  </ul>

 -->
