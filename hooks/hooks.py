#Please make file in [your git directory]/.git/hooks/post-receive 
#and do not add extension after the file name.
#I wrote the script in the "post-recieve" in below.
"""
echo "start pushing"
~/forgit/hooks/hooks.sh
git push origin master
~                        
"""
