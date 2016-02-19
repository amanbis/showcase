module.exports = function(grunt) {
	
	grunt.initConfig({

		uglify: {
			my_target: {
				files: {
					'_/js/main.js': ['_/components/js/main.js']
				} //files
			} //my_target
		}, //uglify

		watch: {
			files: ['_/components/js/*.js'],
			tasks: ['uglify']
		}, //watch

		browserSync: {
			bsFiles: {
				src: [
					'_/components/js/*.js',
					'./*.html'
				]
			},
			options: {
				watchTask: true,
				server: {
					baseDir: './'
				}
			}
		} //browser-sync

	}) //initConfig

	// load npm tasks
	grunt.loadNpmTasks('grunt-contrib-uglify')
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-contrib-compass')
	grunt.loadNpmTasks('grunt-browser-sync')

	// define default task
    grunt.registerTask('default', ['browserSync', 'watch'])

} // exports