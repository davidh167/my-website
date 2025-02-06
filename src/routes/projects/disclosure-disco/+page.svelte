<div class="container mx-auto px-4 py-12">
    <!-- Header -->
    <h2 class="h2 text-center">DisclosureDisco</h2>
    <p class="text-center text-lg max-w-lg mx-auto">
        A data pipeline developed as part of the <strong>Digital Democracy Project</strong> within the <strong>Institute for Advanced Technology and Public Policy (IATPP)</strong>. DisclosureDisco automates the retrieval, parsing, and storage of financial disclosure data from the FPPC database, enhancing public accessibility to critical transparency records.
    </p>

    <!-- Technologies Used -->
    <div class="mt-10">
        <h3 class="font-semibold text-lg">Technologies Used</h3>
        <ul class="list-disc list-inside text-sm mt-4">
            <li><strong>Database:</strong> MySQL for structured storage and efficient querying.</li>
            <li><strong>Web Scraping:</strong> Selenium for automated data retrieval from web sources.</li>
            <li><strong>API Integration:</strong> REST APIs to fetch structured financial data.</li>
            <li><strong>Parsing:</strong> PyPDF for extracting text from PDF disclosures.</li>
        </ul>
    </div>

    <!-- Features Section -->
    <div class="mt-10">
        <h3 class="font-semibold text-lg">Features</h3>
        <ul class="list-disc list-inside text-sm mt-4">
            <li>Automated extraction of financial disclosures from the FPPC database.</li>
            <li>Efficient parsing and transformation of raw data into a structured format.</li>
            <li>Database integration for organized and scalable data storage.</li>
            <li>Support for both web-based and PDF-based data sources.</li>
        </ul>
    </div>

    <!-- Challenges Section -->
    <div class="mt-10">
        <h3 class="font-semibold text-lg">Challenges</h3>
        <p class="text-sm mt-2">
            One of the main challenges was handling inconsistencies in financial disclosure formats, particularly with PDFs ranging from structured digital documents to scanned image-based files. Extracting text from structured PDFs was straightforward, but dealing with scanned documents required additional preprocessing techniques like OCR. Additionally, managing dynamic website elements during scraping and optimizing parsing for large-scale data further refined our approach to data engineering and automation.
        </p>
    </div>

    <!-- Impact Section -->
    <div class="mt-10">
        <h3 class="font-semibold text-lg">Impact</h3>
        <p class="text-sm mt-2">
            We significantly improved the time required for clients to analyze financial disclosure documents by automating data retrieval and parsing. This reduced the manual effort needed to extract relevant information, streamlining the analysis process. The remaining tasks within this pipeline primarily involve human verification to ensure accuracy and completeness.
        </p>
    </div>

    <!-- Source Code Section -->
    <!-- <div class="mt-10">
        <h3 class="font-semibold text-lg">Source Code</h3>
        <p class="text-sm mt-2">
            The source code for this project is available on <a href="YOUR_GITHUB_LINK_HERE" target="_blank" rel="noreferrer" class="text-blue-400 underline">GitHub</a>, demonstrating the ETL pipeline and data handling techniques used.
        </p>
    </div> -->
</div>