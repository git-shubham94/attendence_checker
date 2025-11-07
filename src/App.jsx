import { useState } from "react";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function AttendanceCalculator() {
  const [subjectName, setSubjectName] = useState("");
  const [lecture, setLecture] = useState("");
  const [tutorial, setTutorial] = useState("");
  const [skilling, setSkilling] = useState("");
  const [practical, setPractical] = useState("");
  const [result, setResult] = useState(null);

  const calculateAttendance = () => {
    let totalScore = 0;
    let totalWeight = 0;

    if (lecture !== "") {
      totalScore += parseFloat(lecture) * 100;
      totalWeight += 100;
    }

    if (tutorial !== "") {
      totalScore += parseFloat(tutorial) * 100;
      totalWeight += 100;
    }

    if (skilling !== "") {
      totalScore += parseFloat(skilling) * 25;
      totalWeight += 25;
    }

    if (practical !== "") {
      totalScore += parseFloat(practical) * 50;
      totalWeight += 50;
    }

    if (totalWeight === 0) {
      setResult("⚠️ Please enter at least one value!");
      return;
    }

    const finalAttendance = totalScore / totalWeight;
    setResult(finalAttendance.toFixed(2) + "%");
  };

  const resetFields = () => {
    setSubjectName("");
    setLecture("");
    setTutorial("");
    setSkilling("");
    setPractical("");
    setResult(null);
  };

  return (
    <center>
    <div className="bg-light d-flex align-items-center justify-content-center min-vh-100 p-3">
      <Card className="shadow-lg p-4" style={{ maxWidth: '600px', width: '100%' }}>
        <Card.Body>
          <div className="text-center mb-4">
            <h2 className="fw-bold mb-0">L-T-P-S Calculator Pro</h2>
            <p className="text-muted small">Advanced Academic Performance Analytics</p>
          </div>
          
          <Button variant="outline-dark" className="d-flex align-items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-history me-2" viewBox="0 0 16 16">
              <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .585.088zM6.646 1.954a7 7 0 0 1-.774 4.125l-.75-.138a8 8 0 0 0 .858-4.576zM4.78 3.522a7 7 0 0 1-1.74 3.75l-.94-.347a8 8 0 0 0 1.965-4.227zM3.109 5.56a7 7 0 0 1-.741 2.376l-.922.382a8 8 0 0 0 .83-2.618zM2.083 7.646a7 7 0 0 1-.167.625h-1a8 8 0 0 0 .18-1.554zM2.08 8.354a7 7 0 0 1 .167.625h-1a8 8 0 0 0-.18 1.554zM3.109 10.44a7 7 0 0 1 .741-2.376l.922-.382a8 8 0 0 0-.83 2.618zM4.78 12.478a7 7 0 0 1 1.74-3.75l.94.347a8 8 0 0 0-1.965 4.227zM6.646 14.046a7 7 0 0 1 .774-4.125l.75.138a8 8 0 0 0-.858 4.576zM8.515 14.981A7 7 0 0 0 8 15V16a8 8 0 0 1-.585-.088z"/>
              <path d="M8 3.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5h3.5a.5.5 0 0 0 0-1H8.5V3.5z"/>
            </svg>
            Show History
          </Button>

          <Row className="g-4">
            <Col xs={12} md={6}>
              <Form.Group className="bg-light rounded-2 p-3">
                <Form.Label className="text-muted fw-semibold">Subject Name (Optional)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter subject name"
                  value={subjectName}
                  onChange={(e) => setSubjectName(e.target.value)}
                  className="bg-light border-0 px-0"
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group className="bg-light rounded-2 p-3 position-relative">
                <Form.Label className="text-muted fw-semibold">Lecture Component (%)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter percentage"
                  value={lecture}
                  onChange={(e) => setLecture(e.target.value)}
                  className="bg-light border-0 px-0"
                />
                <span className="position-absolute top-0 end-0 mt-3 me-3 badge bg-secondary-subtle text-dark">100%</span>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group className="bg-light rounded-2 p-3 position-relative">
                <Form.Label className="text-muted fw-semibold">Tutorial Component (%)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter percentage"
                  value={tutorial}
                  onChange={(e) => setTutorial(e.target.value)}
                  className="bg-light border-0 px-0"
                />
                <span className="position-absolute top-0 end-0 mt-3 me-3 badge bg-secondary-subtle text-dark">100%</span>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group className="bg-light rounded-2 p-3 position-relative">
                <Form.Label className="text-muted fw-semibold">Practical Component (%)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter percentage"
                  value={practical}
                  onChange={(e) => setPractical(e.target.value)}
                  className="bg-light border-0 px-0"
                />
                <span className="position-absolute top-0 end-0 mt-3 me-3 badge bg-secondary-subtle text-dark">50%</span>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group className="bg-light rounded-2 p-3 position-relative">
                <Form.Label className="text-muted fw-semibold">Skilling Component (%)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter percentage"
                  value={skilling}
                  onChange={(e) => setSkilling(e.target.value)}
                  className="bg-light border-0 px-0"
                />
                <span className="position-absolute top-0 end-0 mt-3 me-3 badge bg-secondary-subtle text-dark">25%</span>
              </Form.Group>
            </Col>
          </Row>
          
          <div className="d-flex justify-content-center mt-4">
            <Button 
              onClick={calculateAttendance} 
              variant="primary" 
              className="px-5 py-2 fw-bold"
            >
              Calculate Attendance
            </Button>
            <Button 
              onClick={resetFields} 
              variant="light" 
              className="ms-3 px-5 py-2 fw-bold"
            >
              Reset
            </Button>
          </div>

          {result && (
            <div className="mt-4 p-3 bg-light text-center rounded">
              <h5 className="mb-0">Final Attendance: {result}</h5>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
    </center>
  );
}

export default AttendanceCalculator;