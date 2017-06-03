module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'css/style.css': 'sass/style.sass'
					}
				}
		},
		
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'images/',
					src: ['./*.{png,jpg,gif}'],
					dest: 'images/after/'
				}]
			}
		},
		
		browserSync: {
    		bsFiles: {
       			src : [
       				'css/*.css',
       				'index.html'
       			]
    		},
    		options: {
    			watchtask: true,
       			server: {
            		baseDir: "./"
        		}
    		}
		},
		
		watch: {
			scripts: {
				files: ['sass/*.sass'],
				tasks: ['sass'],
				options: {
					spawn: false,
				},
			}
		}
	});
	
	// Load the plugin tasks
	
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	// Default task(s)
	grunt.registerTask('default', ['sass', 'imagemin', 'browserSync', 'watch']);
};