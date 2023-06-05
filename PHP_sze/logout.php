<?php

session_start();
session_unset();
session_destroy();

#header(send user back to location)